#!/usr/bin/env python3
"""
Import Eufy SelfKOC Performance Data
Creates eufy_selfkoc_performance table and imports performance metrics data
"""

import sqlite3
import re
from datetime import datetime

# Database path
DB_PATH = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'

def create_table():
    """Create the eufy_selfkoc_performance table"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Drop table if exists for clean import
    cursor.execute('DROP TABLE IF EXISTS eufy_selfkoc_performance')
    
    # Create table with appropriate schema
    create_table_sql = """
    CREATE TABLE eufy_selfkoc_performance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        eufy_selfkoc_url TEXT NOT NULL UNIQUE,
        video_id TEXT NOT NULL,
        account_name TEXT NOT NULL,
        likes INTEGER DEFAULT 0,
        comments INTEGER DEFAULT 0,
        forwarding INTEGER DEFAULT 0,
        views INTEGER DEFAULT 0,
        selfkoc_post_date DATE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    """
    
    cursor.execute(create_table_sql)
    
    # Create indexes for better performance
    cursor.execute('CREATE INDEX idx_eufy_selfkoc_account ON eufy_selfkoc_performance(account_name);')
    cursor.execute('CREATE INDEX idx_eufy_selfkoc_date ON eufy_selfkoc_performance(selfkoc_post_date);')
    cursor.execute('CREATE INDEX idx_eufy_selfkoc_views ON eufy_selfkoc_performance(views);')
    cursor.execute('CREATE INDEX idx_eufy_selfkoc_video_id ON eufy_selfkoc_performance(video_id);')
    
    conn.commit()
    conn.close()
    print("✅ Table eufy_selfkoc_performance created successfully")

def extract_account_and_video_id(url):
    """Extract account name and video ID from TikTok URL"""
    # Pattern: https://www.tiktok.com/@account/video/video_id
    pattern = r'https://www\.tiktok\.com/@([^/]+)/video/(\d+)'
    match = re.search(pattern, url)
    if match:
        return match.group(1), match.group(2)
    return None, None

def parse_views(views_str):
    """Parse views string to integer (handle comma separators)"""
    if isinstance(views_str, str):
        return int(views_str.replace(',', ''))
    return int(views_str)

def parse_date(date_str):
    """Parse date string to proper format"""
    # Convert format from 2025/4/3 to 2025-04-03
    parts = date_str.split('/')
    if len(parts) == 3:
        year, month, day = parts
        return f"{year}-{month.zfill(2)}-{day.zfill(2)}"
    return date_str

def import_data():
    """Import performance data into the table"""
    
    # Raw data from the provided table
    raw_data = """
https://www.tiktok.com/@smithluiio/video/7488752993437764894	7	0	1	492	2025/4/3
https://www.tiktok.com/@luckyybvswewc/video/7488755162329206047	6	0	1	407	2025/4/3
https://www.tiktok.com/@jacekdrz/video/7488758552836885806	2	0	1	362	2025/4/3
https://www.tiktok.com/@nikiaten07/video/7488893765801889054	1	0	0	297	2025/4/3
https://www.tiktok.com/@johnsturgis6/video/7488755212119805214	0	0	1	295	2025/4/3
https://www.tiktok.com/@annabwlxgie/video/7488893664354110751	3	0	0	273	2025/4/3
https://www.tiktok.com/@joelsoares081/video/7488893924686171422	0	0	0	132	2025/4/3
https://www.tiktok.com/@smithluiio/video/7488393273745149214	13	0	1	882	2025/4/2
https://www.tiktok.com/@nikiaten07/video/7488360961800146206	4	0	1	753	2025/4/2
https://www.tiktok.com/@jasonken66/video/7488369424404057375	8	0	1	731	2025/4/2
https://www.tiktok.com/@annabwlxgie/video/7488361496049700126	6	0	1	652	2025/4/2
https://www.tiktok.com/@marvinslade3/video/7488369217264176430	13	0	0	561	2025/4/2
https://www.tiktok.com/@annabwlxgie/video/7488727702120221983	0	0	1	450	2025/4/2
https://www.tiktok.com/@johnsturgis6/video/7488392824044391710	4	0	1	406	2025/4/2
https://www.tiktok.com/@kevinpotter66/video/7488369814289894702	1	0	1	361	2025/4/2
https://www.tiktok.com/@kevinpotter66/video/7488732474101566766	2	0	0	343	2025/4/2
https://www.tiktok.com/@marvinslade3/video/7488732029836741934	3	0	0	327	2025/4/2
https://www.tiktok.com/@nikiaten07/video/7488727687167610143	1	0	1	321	2025/4/2
https://www.tiktok.com/@joelsoares081/video/7488360983656811806	2	0	0	293	2025/4/2
https://www.tiktok.com/@jasonken66/video/7488732026019892511	0	0	1	290	2025/4/2
https://www.tiktok.com/@joelsoares081/video/7488727756402871582	2	0	0	269	2025/4/2
https://www.tiktok.com/@smithluiio/video/7488031674492669214	25	1	6	2148	2025/4/1
https://www.tiktok.com/@marvinslade3/video/7487968233325071662	8	0	0	543	2025/4/1
https://www.tiktok.com/@nikiaten07/video/7487972122183142687	0	0	0	383	2025/4/1
https://www.tiktok.com/@joelsoares081/video/7487974677734853919	2	0	0	323	2025/4/1
https://www.tiktok.com/@joelsoares081/video/7488152872165707039	1	0	0	296	2025/4/1
https://www.tiktok.com/@nikiaten07/video/7488153128865451295	0	0	0	278	2025/4/1
https://www.tiktok.com/@smithluiio/video/7487602759986941215	27	1	4	3579	2025/3/31
https://www.tiktok.com/@kevinpotter66/video/7487571553148734763	13	0	3	683	2025/3/31
https://www.tiktok.com/@nikiaten07/video/7487206998614740254	8	0	0	390	2025/3/30
https://www.tiktok.com/@joelsoares081/video/7487209956991667486	5	0	0	376	2025/3/30
https://www.tiktok.com/@kevinpotter66/video/7486867655119392042	6	0	0	523	2025/3/29
https://www.tiktok.com/@joelsoares081/video/7486847433687813407	2	0	0	315	2025/3/29
https://www.tiktok.com/@joelsoares081/video/7486519991391554846	8	0	1	541	2025/3/28
https://www.tiktok.com/@marvinslade3/video/7486508393352531246	9	1	1	515	2025/3/28
https://www.tiktok.com/@nikiaten07/video/7486518006554627358	5	0	1	427	2025/3/28
https://www.tiktok.com/@jasonken66/video/7486664611870067998	2	0	0	285	2025/3/28
https://www.tiktok.com/@jasonken66/video/7486297629890972958	11	0	2	5057	2025/3/27
https://www.tiktok.com/@lucky.dog.movie/video/7486297678444252462	16	0	0	4712	2025/3/27
https://www.tiktok.com/@nikiaten07/video/7486157006986972462	19	0	1	3970	2025/3/27
https://www.tiktok.com/@smithluiio/video/7486338824268795167	66	2	22	2870	2025/3/27
https://www.tiktok.com/@johnsturgis6/video/7486328826503367966	5	1	0	2114	2025/3/27
https://www.tiktok.com/@yuumy46/video/7486158408719011103	2	0	0	441	2025/3/27
https://www.tiktok.com/@joelsoares081/video/7486156753751624990	2	0	1	436	2025/3/27
https://www.tiktok.com/@yuumy46/video/7486490037018840351	0	0	0	316	2025/3/27
https://www.tiktok.com/@daisywilson6/video/7486487091245976878	1	0	0	285	2025/3/27
https://www.tiktok.com/@kevinpotter66/video/7486297588719865134	1	0	0	277	2025/3/27
https://www.tiktok.com/@jacekdrz/video/7486489209822448942	1	0	0	156	2025/3/27
https://www.tiktok.com/@annabwlxgie/video/7486489330865704222	0	0	0	149	2025/3/27
https://www.tiktok.com/@smithluiio/video/7486483796095765790	2	0	1	133	2025/3/27
https://www.tiktok.com/@zspmei163/video/7486484500449414430	1	0	0	121	2025/3/27
https://www.tiktok.com/@xxxppp47/video/7486484769786694954	0	0	0	29	2025/3/27
https://www.tiktok.com/@johnsturgis6/video/7486486407473581343	0	0	0	11	2025/3/27
https://www.tiktok.com/@smithluiio/video/7485949494761164063	1559	14	337	227300	2025/3/26
https://www.tiktok.com/@smithluiio/video/7486127313441000735	141	1	17	26800	2025/3/26
https://www.tiktok.com/@lucky.dog.movie/video/7485761030199479598	20	0	3	6151	2025/3/26
https://www.tiktok.com/@jasonken66/video/7485761087053253919	13	0	2	5380	2025/3/26
https://www.tiktok.com/@jasonken66/video/7486115352946937118	21	0	2	3860	2025/3/26
https://www.tiktok.com/@yuumy46/video/7485746693049290014	7	0	1	3809	2025/3/26
https://www.tiktok.com/@luckyybvswewc/video/7486129784771071262	12	1	2	3655	2025/3/26
https://www.tiktok.com/@xxxppp47/video/7486137709459721514	17	0	0	1370	2025/3/26
https://www.tiktok.com/@lucky.dog.movie/video/7486115813494115626	5	0	0	1142	2025/3/26
https://www.tiktok.com/@nikiaten07/video/7485749490486660398	9	0	0	914	2025/3/26
https://www.tiktok.com/@xxxppp47/video/7485950338764131626	2	0	0	906	2025/3/26
https://www.tiktok.com/@joelsoares081/video/7485749864278609182	3	0	2	636	2025/3/26
https://www.tiktok.com/@zspmei163/video/7486129790114647339	5	0	1	540	2025/3/26
https://www.tiktok.com/@kevinpotter66/video/7485764545651264810	2	0	1	402	2025/3/26
https://www.tiktok.com/@kevinpotter66/video/7486117360810675502	0	0	0	275	2025/3/26
https://www.tiktok.com/@smithluiio/video/7485568057843191070	423	9	36	57500	2025/3/25
https://www.tiktok.com/@smithluiio/video/7485720906862513438	130	7	47	16800	2025/3/25
https://www.tiktok.com/@lucky.dog.movie/video/7485378333258091822	18	0	0	6161	2025/3/25
https://www.tiktok.com/@yuumy46/video/7485559828467731743	10	0	0	5936	2025/3/25
https://www.tiktok.com/@xxxppp47/video/7485721894117788971	13	0	0	5401	2025/3/25
https://www.tiktok.com/@joelsoares081/video/7485560095821008159	5	1	3	3960	2025/3/25
https://www.tiktok.com/@luckyybvswewc/video/7485724483945385246	31	0	1	3245	2025/3/25
https://www.tiktok.com/@jasonken66/video/7485378242724056351	6	0	0	2174	2025/3/25
https://www.tiktok.com/@joelsoares081/video/7485384496376827167	7	0	2	1220	2025/3/25
https://www.tiktok.com/@johnsturgis6/video/7485721545327856927	4	0	0	1082	2025/3/25
https://www.tiktok.com/@nikiaten07/video/7485559725065588011	5	0	0	914	2025/3/25
https://www.tiktok.com/@zspmei163/video/7485724179556322602	7	0	0	549	2025/3/25
https://www.tiktok.com/@kevinpotter66/video/7485378178752564526	3	0	0	507	2025/3/25
https://www.tiktok.com/@daisywilson6/video/7485724927887215918	1	1	0	279	2025/3/25
https://www.tiktok.com/@smithluiio/video/7485335985182592287	82	5	12	25000	2025/3/24
https://www.tiktok.com/@yuumy46/video/7485365742922157343	33	0	4	9171	2025/3/24
https://www.tiktok.com/@xxxppp47/video/7485335323459718442	28	2	1	5858	2025/3/24
https://www.tiktok.com/@yuumy46/video/7485047672538189086	12	0	4	5020	2025/3/24
https://www.tiktok.com/@smithluiio/video/7485204647242747167	19	0	1	3958	2025/3/24
https://www.tiktok.com/@johnsturgis6/video/7485328942400933151	19	0	0	1219	2025/3/24
https://www.tiktok.com/@nikiaten07/video/7485364453182065962	6	0	0	1008	2025/3/24
https://www.tiktok.com/@annabwlxgie/video/7485049386410446111	4	0	0	988	2025/3/24
https://www.tiktok.com/@johnsturgis6/video/7485205062671748382	4	0	0	891	2025/3/24
https://www.tiktok.com/@joelsoares081/video/7485047443604655390	6	0	0	780	2025/3/24
https://www.tiktok.com/@zspmei163/video/7485333472052038958	4	0	0	548	2025/3/24
https://www.tiktok.com/@xxxppp47/video/7485198430923459882	8	1	0	466	2025/3/24
https://www.tiktok.com/@luckyybvswewc/video/7485329540022111518	5	0	0	365	2025/3/24
https://www.tiktok.com/@johnsturgis6/video/7484853500208319775	141	0	20	121500	2025/3/23
https://www.tiktok.com/@johnsturgis6/video/7484974556046707998	88	0	12	100400	2025/3/23
https://www.tiktok.com/@smithluiio/video/7484979290153569566	60	4	8	13100	2025/3/23
https://www.tiktok.com/@smithluiio/video/7484853910520253727	44	2	7	12900	2025/3/23
https://www.tiktok.com/@lucky.dog.movie/video/7484266588296858922	15	0	3	8331	2025/3/23
https://www.tiktok.com/@marvinslade3/video/7484999884643339566	19	0	1	6174	2025/3/23
https://www.tiktok.com/@joelsoares081/video/7485008261540777247	8	0	2	3794	2025/3/23
https://www.tiktok.com/@jacekdrz/video/7484665632290639146	15	0	1	1490	2025/3/23
https://www.tiktok.com/@zspmei163/video/7484978906580421934	8	0	1	798	2025/3/23
https://www.tiktok.com/@daisywilson6/video/7484980194671955246	3	0	0	608	2025/3/23
https://www.tiktok.com/@jasonken66/video/7485001948828110111	1	0	0	414	2025/3/23
https://www.tiktok.com/@kevinpotter66/video/7485002430674193710	1	0	1	400	2025/3/23
https://www.tiktok.com/@nikiaten07/video/7485008982256536875	3	0	2	392	2025/3/23
https://www.tiktok.com/@smithluiio/video/7484234502244420895	710700	4785	39800	38200000	2025/3/22
https://www.tiktok.com/@annabwlxgie/video/7484256131976645919	186	6	18	164800	2025/3/22
https://www.tiktok.com/@johnsturgis6/video/7484235849085881631	115	1	15	48800	2025/3/22
https://www.tiktok.com/@smithluiio/video/7484490886236146975	27	2	2	11000	2025/3/22
https://www.tiktok.com/@johnsturgis6/video/7484489779069979935	14	0	1	8339	2025/3/22
https://www.tiktok.com/@marvinslade3/video/7484266596261743918	29	0	2	7210	2025/3/22
https://www.tiktok.com/@jasonken66/video/7484266610350361886	8	0	0	6754	2025/3/22
https://www.tiktok.com/@joelsoares081/video/7484263027219434782	12	0	2	5630	2025/3/22
https://www.tiktok.com/@luckyybvswewc/video/7484236587627236639	13	0	0	5608	2025/3/22
https://www.tiktok.com/@xxxppp47/video/7484233051162152234	22	0	3	5398	2025/3/22
https://www.tiktok.com/@zspmei163/video/7484490373285317930	9	0	0	4464	2025/3/22
https://www.tiktok.com/@xxxppp47/video/7484490249482063147	15	1	1	2982	2025/3/22
https://www.tiktok.com/@jacekdrz/video/7484499945043660074	30	0	0	2959	2025/3/22
https://www.tiktok.com/@zspmei163/video/7484237318312824110	10	0	0	1267	2025/3/22
https://www.tiktok.com/@kevinpotter66/video/7484266561197444394	0	0	0	308	2025/3/22
https://www.tiktok.com/@nikiaten07/video/7484263046731418922	6	0	0	296	2025/3/22
https://www.tiktok.com/@jacekdrz/video/7484232285428927787	4	0	0	256	2025/3/22
https://www.tiktok.com/@daisywilson6/video/7484236911041695019	0	0	0	217	2025/3/22
https://www.tiktok.com/@yuumy46/video/7484500750479936798	0	0	0	19	2025/3/22
https://www.tiktok.com/@johnsturgis6/video/7484082675238571294	1230	4	154	612200	2025/3/21
https://www.tiktok.com/@johnsturgis6/video/7483899633547169055	19	0	0	13500	2025/3/21
https://www.tiktok.com/@kevinpotter66/video/7483878621388754222	10	0	1	8396	2025/3/21
https://www.tiktok.com/@jacekdrz/video/7484082735313784110	18	1	4	7187	2025/3/21
https://www.tiktok.com/@jacekdrz/video/7483898928836906282	31	0	2	7115	2025/3/21
https://www.tiktok.com/@xxxppp47/video/7483899126845918506	26	1	4	6693	2025/3/21
https://www.tiktok.com/@xxxppp47/video/7484085520729967914	17	0	1	5960	2025/3/21
https://www.tiktok.com/@lucky.dog.movie/video/7483877966015925547	12	0	1	5533	2025/3/21
https://www.tiktok.com/@smithluiio/video/7483900132052798750	8	3	2	4590	2025/3/21
https://www.tiktok.com/@annabwlxgie/video/7483882340955999518	19	0	1	4309	2025/3/21
https://www.tiktok.com/@yuumy46/video/7483904849159998751	3	0	0	1996	2025/3/21
https://www.tiktok.com/@luckyybvswewc/video/7483901003213983007	4	0	0	1420	2025/3/21
https://www.tiktok.com/@joelsoares081/video/7483882157979553054	4	0	0	1413	2025/3/21
https://www.tiktok.com/@jasonken66/video/7483878468917234974	9	0	1	1139	2025/3/21
https://www.tiktok.com/@luckyybvswewc/video/7484083132120042782	3	0	0	1117	2025/3/21
https://www.tiktok.com/@nikiaten07/video/7483905117826354478	4	0	1	994	2025/3/21
https://www.tiktok.com/@zspmei163/video/7483899286468463918	8	0	0	636	2025/3/21
https://www.tiktok.com/@daisywilson6/video/7483905055540694318	0	0	0	9	2025/3/21
https://www.tiktok.com/@jacekdrz/video/7483528674826915115	36	2	6	17300	2025/3/20
https://www.tiktok.com/@smithluiio/video/7483723742682549535	11	2	0	8308	2025/3/20
https://www.tiktok.com/@yuumy46/video/7483548421794696479	6	2	1	4800	2025/3/20
https://www.tiktok.com/@annabwlxgie/video/7483579861836107039	43	3	2	4609	2025/3/20
https://www.tiktok.com/@smithluiio/video/7483531801986649375	1	0	0	4491	2025/3/20
https://www.tiktok.com/@xxxppp47/video/7483527736041082158	38	1	2	4441	2025/3/20
https://www.tiktok.com/@lucky.dog.movie/video/7483522591903255850	12	0	0	4033	2025/3/20
https://www.tiktok.com/@joelsoares081/video/7483549789682928926	13	3	0	3222	2025/3/20
https://www.tiktok.com/@jacekdrz/video/7483724157507718442	7	0	0	2408	2025/3/20
https://www.tiktok.com/@jasonken66/video/7483689321246035231	1	0	0	2143	2025/3/20
https://www.tiktok.com/@xxxppp47/video/7483724053866384682	24	2	2	1941	2025/3/20
https://www.tiktok.com/@jasonken66/video/7483522212238986526	3	0	0	1797	2025/3/20
https://www.tiktok.com/@annabwlxgie/video/7483523534619184415	6	0	4	1620	2025/3/20
https://www.tiktok.com/@marvinslade3/video/7483689234662985002	3	0	0	767	2025/3/20
https://www.tiktok.com/@zspmei163/video/7483528583814647082	3	0	1	632	2025/3/20
https://www.tiktok.com/@marvinslade3/video/7483521752702749994	3	0	0	588	2025/3/20
https://www.tiktok.com/@zspmei163/video/7483724510433398062	6	0	0	483	2025/3/20
https://www.tiktok.com/@kevinpotter66/video/7483522561016515886	7	0	1	381	2025/3/20
https://www.tiktok.com/@luckyybvswewc/video/7483724356829318431	5	0	0	322	2025/3/20
https://www.tiktok.com/@kevinpotter66/video/7483689703758384430	1	0	0	301	2025/3/20
https://www.tiktok.com/@nikiaten07/video/7483549422379355435	1	0	0	271	2025/3/20
https://www.tiktok.com/@johnsturgis6/video/7483531431872892191	0	0	0	257	2025/3/20
https://www.tiktok.com/@luckyybvswewc/video/7483533334702738719	8	0	0	241	2025/3/20
https://www.tiktok.com/@daisywilson6/video/7483532924638301483	0	0	0	35	2025/3/20
https://www.tiktok.com/@daisywilson6/video/7483723748944809262	0	0	0	25	2025/3/20
https://www.tiktok.com/@annabwlxgie/video/7483144456900758815	479	14	31	148000	2025/3/19
https://www.tiktok.com/@lucky.dog.movie/video/7483144117803928878	19	0	2	21400	2025/3/19
https://www.tiktok.com/@marvinslade3/video/7483143632808070443	18	1	3	8145	2025/3/19
https://www.tiktok.com/@yuumy46/video/7483167293095120159	7	0	2	5746	2025/3/19
https://www.tiktok.com/@smithluiio/video/7483127734307147038	15	2	1	5721	2025/3/19
https://www.tiktok.com/@xxxppp47/video/7483125472474303790	20	0	0	4875	2025/3/19
https://www.tiktok.com/@jasonken66/video/7483143679637556510	8	0	0	4742	2025/3/19
https://www.tiktok.com/@jacekdrz/video/7483129619680349483	27	0	3	4564	2025/3/19
https://www.tiktok.com/@joelsoares081/video/7483146068285312287	9	1	1	3758	2025/3/19
https://www.tiktok.com/@johnsturgis6/video/7483126067734105374	6	0	0	2299	2025/3/19
https://www.tiktok.com/@daisywilson6/video/7483126820662037803	6	0	0	890	2025/3/19
https://www.tiktok.com/@zspmei163/video/7483125723020954923	3	0	0	668	2025/3/19
https://www.tiktok.com/@luckyybvswewc/video/7483126242690993438	1	0	0	417	2025/3/19
https://www.tiktok.com/@kevinpotter66/video/7483143704073506094	0	0	1	351	2025/3/19
https://www.tiktok.com/@nikiaten07/video/7483168998713085227	1	0	0	331	2025/3/19
https://www.tiktok.com/@annabwlxgie/video/7482778269222227231	1719	14	156	1000000	2025/3/18
https://www.tiktok.com/@xxxppp47/video/7482744085774667051	47	0	2	12800	2025/3/18
https://www.tiktok.com/@jasonken66/video/7482777292448566559	19	0	0	6929	2025/3/18
https://www.tiktok.com/@jacekdrz/video/7482743597134155054	25	1	1	5692	2025/3/18
https://www.tiktok.com/@yuumy46/video/7482778287052262687	8	0	0	5027	2025/3/18
https://www.tiktok.com/@zspmei163/video/7482744643642281262	12	0	1	4467	2025/3/18
https://www.tiktok.com/@daisywilson6/video/7482745230949829934	13	0	0	4114	2025/3/18
https://www.tiktok.com/@johnsturgis6/video/7482745795280768286	7	1	0	3706	2025/3/18
https://www.tiktok.com/@smithluiio/video/7482743580663008543	4	1	0	3521	2025/3/18
https://www.tiktok.com/@luckyybvswewc/video/7482745125400005918	7	0	0	3249	2025/3/18
https://www.tiktok.com/@marvinslade3/video/7482777546275294506	15	0	2	3186	2025/3/18
https://www.tiktok.com/@joelsoares081/video/7482778311731481887	10	1	1	3159	2025/3/18
https://www.tiktok.com/@kevinpotter66/video/7482778766712868138	10	0	1	936	2025/3/18
https://www.tiktok.com/@lucky.dog.movie/video/7482778170479955243	9	0	0	817	2025/3/18
https://www.tiktok.com/@nikiaten07/video/7482775813004283178	1	0	1	753	2025/3/18
https://www.tiktok.com/@joelsoares081/video/7482397415526485278	91	7	9	24400	2025/3/17
https://www.tiktok.com/@smithluiio/video/7482406966225030430	16	0	4	15500	2025/3/17
https://www.tiktok.com/@marvinslade3/video/7482412768738676014	11	0	1	7297	2025/3/17
https://www.tiktok.com/@annabwlxgie/video/7482396017963420958	8	3	3	6949	2025/3/17
https://www.tiktok.com/@johnsturgis6/video/7482407217908436255	5	0	0	6467	2025/3/17
https://www.tiktok.com/@jacekdrz/video/7482407385118657835	22	0	2	6427	2025/3/17
https://www.tiktok.com/@lucky.dog.movie/video/7482409105412525358	10	0	1	4585	2025/3/17
https://www.tiktok.com/@nikiaten07/video/7482402922953821486	6	1	0	4282	2025/3/17
https://www.tiktok.com/@jasonken66/video/7482406542445219103	11	0	0	4225	2025/3/17
https://www.tiktok.com/@daisywilson6/video/7482407369020886318	5	1	0	3914	2025/3/17
https://www.tiktok.com/@yuumy46/video/7482395538135076127	1	0	0	1967	2025/3/17
https://www.tiktok.com/@luckyybvswewc/video/7482407179895524639	3	0	0	1479	2025/3/17
https://www.tiktok.com/@zspmei163/video/7482592605109390638	12	0	1	967	2025/3/17
https://www.tiktok.com/@zspmei163/video/7482425005813337386	8	1	0	842	2025/3/17
https://www.tiktok.com/@kevinpotter66/video/7482404583591906602	15	0	2	432	2025/3/17
https://www.tiktok.com/@annabwlxgie/video/7481667596580867358	115500	422	6358	10700000	2025/3/14
https://www.tiktok.com/@jasonken66/video/7481671556935027999	1488	23	263	1500000	2025/3/14
https://www.tiktok.com/@lucky.dog.movie/video/7481671122715610414	26	1	2	37400	2025/3/14
https://www.tiktok.com/@smithluiio/video/7481331995654573342	26	2	5	17000	2025/3/14
https://www.tiktok.com/@xxxppp47/video/7481333008360852779	39	1	1	10700	2025/3/14
https://www.tiktok.com/@kevinpotter66/video/7481670964103662894	42	2	12	6061	2025/3/14
https://www.tiktok.com/@luckyybvswewc/video/7481331967372348702	16	0	3	5739	2025/3/14
https://www.tiktok.com/@johnsturgis6/video/7481330853252042015	8	0	0	4952	2025/3/14
https://www.tiktok.com/@xxxppp47/video/7481681564523351342	19	0	0	4878	2025/3/14
https://www.tiktok.com/@marvinslade3/video/7481670875503136046	6	0	1	4513	2025/3/14
https://www.tiktok.com/@smithluiio/video/7481683664040987934	12	0	0	4250	2025/3/14
https://www.tiktok.com/@annabwlxgie/video/7481470393912446239	8	0	5	3959	2025/3/14
https://www.tiktok.com/@jacekdrz/video/7481686048045763886	13	3	1	3873	2025/3/14
https://www.tiktok.com/@yuumy46/video/7481668025658248478	9	0	1	3649	2025/3/14
https://www.tiktok.com/@joelsoares081/video/7481667730412784926	12	2	1	3421	2025/3/14
https://www.tiktok.com/@jacekdrz/video/7481333312162696490	6	0	0	1438	2025/3/14
https://www.tiktok.com/@johnsturgis6/video/7481682353954278687	4	0	0	1267	2025/3/14
https://www.tiktok.com/@luckyybvswewc/video/7481682136139828510	2	0	0	917	2025/3/14
https://www.tiktok.com/@nikiaten07/video/7481668084189629738	2	0	0	475	2025/3/14
https://www.tiktok.com/@daisywilson6/video/7481683647595302190	0	0	0	204	2025/3/14
https://www.tiktok.com/@jasonken66/video/7481297778396695838	52	4	4	56000	2025/3/13
https://www.tiktok.com/@lucky.dog.movie/video/7481299282234985770	30	0	1	11100	2025/3/13
https://www.tiktok.com/@joelsoares081/video/7481300989652290846	24	0	0	6788	2025/3/13
https://www.tiktok.com/@marvinslade3/video/7481297175658581294	11	0	0	2535	2025/3/13
https://www.tiktok.com/@kevinpotter66/video/7481297818460654890	14	1	3	2414	2025/3/13
https://www.tiktok.com/@nikiaten07/video/7481094496818646315	2	0	1	1751	2025/3/13
https://www.tiktok.com/@nikiaten07/video/7481301008858107178	7	0	0	972	2025/3/13
https://www.tiktok.com/@yuumy46/video/7481301141456833822	2	0	0	367	2025/3/13
https://www.tiktok.com/@jacekdrz/video/7480901728200674603	103	1	19	193200	2025/3/12
https://www.tiktok.com/@annabwlxgie/video/7480724866123992351	138	6	54	189400	2025/3/12
https://www.tiktok.com/@annabwlxgie/video/7480928967470402847	42	2	2	14200	2025/3/12
https://www.tiktok.com/@jacekdrz/video/7480749491289591083	54	2	1	10200	2025/3/12
https://www.tiktok.com/@marvinslade3/video/7480923099332988202	22	0	5	7773	2025/3/12
https://www.tiktok.com/@jasonken66/video/7480923272754760990	30	1	1	7607	2025/3/12
https://www.tiktok.com/@luckyybvswewc/video/7480901927115558175	6	0	0	5177	2025/3/12
https://www.tiktok.com/@kevinpotter66/video/7480924411978304814	46	1	5	5063	2025/3/12
https://www.tiktok.com/@johnsturgis6/video/7480901270467824927	38	0	2	4348	2025/3/12
https://www.tiktok.com/@joelsoares081/video/7480942491890502942	18	0	2	2055	2025/3/12
https://www.tiktok.com/@smithluiio/video/7480902054819532062	2	0	0	1912	2025/3/12
https://www.tiktok.com/@daisywilson6/video/7480901569676840234	6	2	0	1681	2025/3/12
https://www.tiktok.com/@nikiaten07/video/7480725217707396394	3	0	0	675	2025/3/12
https://www.tiktok.com/@nikiaten07/video/7480929063217925422	1	0	0	404	2025/3/12
https://www.tiktok.com/@jacekdrz/video/7480568374142176558	135	1	13	72700	2025/3/11
https://www.tiktok.com/@smithluiio/video/7480564979729534239	6	0	0	7087	2025/3/11
https://www.tiktok.com/@annabwlxgie/video/7480212921377656094	24	3	3	6938	2025/3/11
https://www.tiktok.com/@jacekdrz/video/7480397396753632554	18	0	6	5516	2025/3/11
https://www.tiktok.com/@nikiaten07/video/7480213014415920430	11	0	2	4430	2025/3/11
https://www.tiktok.com/@daisywilson6/video/7480565568421121323	16	1	0	4394	2025/3/11
https://www.tiktok.com/@luckyybvswewc/video/7480564986327174430	7	0	0	3281	2025/3/11
https://www.tiktok.com/@joelsoares081/video/7480226264817601822	1	0	1	3204	2025/3/11
https://www.tiktok.com/@johnsturgis6/video/7480568140959665438	1	0	0	1988	2025/3/11
https://www.tiktok.com/@nikiaten07/video/7480576642755185962	1	0	0	1319	2025/3/11
https://www.tiktok.com/@jasonken66/video/7480574048133549343	2	0	0	1282	2025/3/11
https://www.tiktok.com/@johnsturgis6/video/7480399889663282462	1	0	0	1213	2025/3/11
https://www.tiktok.com/@joelsoares081/video/7480577021177761055	7	0	1	908	2025/3/11
https://www.tiktok.com/@kevinpotter66/video/7480574121781382442	2	0	1	699	2025/3/11
https://www.tiktok.com/@marvinslade3/video/7480573698529987886	9	1	0	481	2025/3/11
https://www.tiktok.com/@jacekdrz/video/7480153559649013035	417	6	69	452200	2025/3/10
https://www.tiktok.com/@johnsturgis6/video/7480156018081598750	35	1	5	37300	2025/3/10
https://www.tiktok.com/@smithluiio/video/7480156038889540895	13	1	4	9951	2025/3/10
https://www.tiktok.com/@smithluiio/video/7479856416849693982	26	1	0	7468	2025/3/10
https://www.tiktok.com/@jasonken66/video/7480197349327867166	15	0	2	6355	2025/3/10
https://www.tiktok.com/@marvinslade3/video/7480197426825973034	16	0	2	5042	2025/3/10
https://www.tiktok.com/@luckyybvswewc/video/7480183929757027614	4	0	0	3413	2025/3/10
https://www.tiktok.com/@johnsturgis6/video/7479855878556929310	8	0	0	2912	2025/3/10
https://www.tiktok.com/@daisywilson6/video/7480183795195465003	4	0	0	2710	2025/3/10
https://www.tiktok.com/@kevinpotter66/video/7480197893933010222	1	0	0	180	2025/3/10
https://www.tiktok.com/@kevinpotter66/video/7479811766327774506	12	0	3	5660	2025/3/9
https://www.tiktok.com/@jasonken66/video/7479810706490051870	9	0	1	5388	2025/3/9
https://www.tiktok.com/@annabwlxgie/video/7479818200113253662	12	3	3	3957	2025/3/9
https://www.tiktok.com/@joelsoares081/video/7479818175693999391	2	2	0	3113	2025/3/9
https://www.tiktok.com/@nikiaten07/video/7479067704431791406	9	0	0	8607	2025/3/7
https://www.tiktok.com/@jasonken66/video/7479055890688085279	25	1	0	8347	2025/3/7
https://www.tiktok.com/@annabwlxgie/video/7479067710203251999	13	1	0	6095	2025/3/7
https://www.tiktok.com/@smithluiio/video/7478744268413160734	22	2	1	6043	2025/3/7
https://www.tiktok.com/@annabwlxgie/video/7478736482581187871	14	2	3	6043	2025/3/7
https://www.tiktok.com/@marvinslade3/video/7479055746039139627	12	0	3	5299	2025/3/7
https://www.tiktok.com/@smithluiio/video/7479023985649356062	14	2	1	5216	2025/3/7
https://www.tiktok.com/@johnsturgis6/video/7479024202368994590	21	0	3	4334	2025/3/7
https://www.tiktok.com/@joelsoares081/video/7478736468530253087	4	0	0	4024	2025/3/7
https://www.tiktok.com/@joelsoares081/video/7479067785067351327	0	0	0	3675	2025/3/7
https://www.tiktok.com/@johnsturgis6/video/7478744326856609054	1	0	0	2391	2025/3/7
https://www.tiktok.com/@nikiaten07/video/7478737942593195307	2	0	0	878	2025/3/7
https://www.tiktok.com/@jacekdrz/video/7478987838080568622	6	0	0	487	2025/3/7
https://www.tiktok.com/@kevinpotter66/video/7479057368697834795	1	0	0	365	2025/3/7
https://www.tiktok.com/@smithluiio/video/7506905779820170526	115	2	20	7674	2025/5/21
https://www.tiktok.com/@smithluiio/video/7507285806231407903	88	3	28	18700	2025/5/22
https://www.tiktok.com/@smithluiio/video/7508000076548164894	36	0	3	6894	2025/5/23
https://www.tiktok.com/@smithluiio/video/7508398710687108383	48	2	11	7333	2025/5/24
https://www.tiktok.com/@smithluiio/video/7508756541294628126	94	2	11	42600	2025/5/25
https://www.tiktok.com/@suuuuupoido/video/7508398503585008939	19	1	0	2111	2025/5/25
https://www.tiktok.com/@ovoo2112/video/7507638072008264990	14	0	0	1516	2025/5/25
https://www.tiktok.com/@koily121/video/7507637157792714014	21	0	1	3744	2025/5/24
https://www.tiktok.com/@suuuuupoido/video/7508000084408225067	33	2	1	3011	2025/5/24
https://www.tiktok.com/@koily121/video/7507278260619955487	13	1	1	2188	2025/5/23
https://www.tiktok.com/@ovoo2112/video/7507284285225749791	17	2	1	1440	2025/5/23
https://www.tiktok.com/@ovoo2112/video/7506895369687600415	47	2	2	5351	2025/5/22
https://www.tiktok.com/@koily121/video/7507091623340231967	10	1	1	1487	2025/5/22
"""
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    lines = raw_data.strip().split('\n')
    imported_count = 0
    
    for line in lines:
        if not line.strip():
            continue
            
        try:
            parts = line.split('\t')
            if len(parts) != 6:
                print(f"⚠️  Skipping malformed line: {line}")
                continue
            
            url, likes, comments, forwarding, views, date = parts
            
            # Extract account name and video ID from URL
            account_name, video_id = extract_account_and_video_id(url)
            if not account_name or not video_id:
                print(f"⚠️  Could not extract account/video ID from: {url}")
                continue
            
            # Parse numeric values
            likes = int(likes)
            comments = int(comments)
            forwarding = int(forwarding)
            views = parse_views(views)
            
            # Parse date
            formatted_date = parse_date(date)
            
            # Insert data
            insert_sql = """
            INSERT OR REPLACE INTO eufy_selfkoc_performance 
            (eufy_selfkoc_url, video_id, account_name, likes, comments, forwarding, views, selfkoc_post_date)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """
            
            cursor.execute(insert_sql, (
                url, video_id, account_name, likes, comments, forwarding, views, formatted_date
            ))
            
            imported_count += 1
            
        except Exception as e:
            print(f"❌ Error processing line: {line}")
            print(f"   Error: {str(e)}")
            continue
    
    conn.commit()
    conn.close()
    
    print(f"✅ Successfully imported {imported_count} records")

def generate_summary():
    """Generate summary statistics"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("\n📊 EUFY SELFKOC PERFORMANCE SUMMARY")
    print("="*50)
    
    # Total records
    cursor.execute("SELECT COUNT(*) FROM eufy_selfkoc_performance")
    total_records = cursor.fetchone()[0]
    print(f"📈 Total Records: {total_records:,}")
    
    # Unique accounts
    cursor.execute("SELECT COUNT(DISTINCT account_name) FROM eufy_selfkoc_performance")
    unique_accounts = cursor.fetchone()[0]
    print(f"👥 Unique KOL Accounts: {unique_accounts}")
    
    # Date range
    cursor.execute("SELECT MIN(selfkoc_post_date), MAX(selfkoc_post_date) FROM eufy_selfkoc_performance")
    min_date, max_date = cursor.fetchone()
    print(f"📅 Date Range: {min_date} to {max_date}")
    
    # Total engagement metrics
    cursor.execute("""
        SELECT 
            SUM(views) as total_views,
            SUM(likes) as total_likes,
            SUM(comments) as total_comments,
            SUM(forwarding) as total_forwarding
        FROM eufy_selfkoc_performance
    """)
    total_views, total_likes, total_comments, total_forwarding = cursor.fetchone()
    
    print(f"\n💫 Total Engagement:")
    print(f"   👀 Views: {total_views:,}")
    print(f"   ❤️  Likes: {total_likes:,}")
    print(f"   💬 Comments: {total_comments:,}")
    print(f"   🔄 Forwarding: {total_forwarding:,}")
    
    # Top performing accounts
    cursor.execute("""
        SELECT 
            account_name,
            COUNT(*) as video_count,
            SUM(views) as total_views,
            SUM(likes) as total_likes,
            AVG(views) as avg_views
        FROM eufy_selfkoc_performance
        GROUP BY account_name
        ORDER BY total_views DESC
        LIMIT 10
    """)
    
    print(f"\n🏆 Top Performing Accounts:")
    for account, video_count, total_views, total_likes, avg_views in cursor.fetchall():
        print(f"   {account}: {video_count} videos, {total_views:,} views, {avg_views:,.0f} avg views")
    
    # Performance by date
    cursor.execute("""
        SELECT 
            selfkoc_post_date,
            COUNT(*) as video_count,
            SUM(views) as total_views
        FROM eufy_selfkoc_performance
        GROUP BY selfkoc_post_date
        ORDER BY total_views DESC
        LIMIT 5
    """)
    
    print(f"\n📅 Best Performing Days:")
    for date, video_count, total_views in cursor.fetchall():
        print(f"   {date}: {video_count} videos, {total_views:,} views")
    
    conn.close()

def main():
    """Main execution function"""
    print("🚀 Starting Eufy SelfKOC Performance Data Import")
    print("=" * 60)
    
    try:
        print("\n1️⃣  Creating database table...")
        create_table()
        
        print("\n2️⃣  Importing performance data...")
        import_data()
        
        print("\n3️⃣  Generating summary statistics...")
        generate_summary()
        
        print(f"\n🎉 Import completed successfully!")
        print(f"💡 Use 'SELECT * FROM eufy_selfkoc_performance LIMIT 10;' to view data")
        
    except Exception as e:
        print(f"❌ Import failed: {str(e)}")
        return False
    
    return True

if __name__ == "__main__":
    main()