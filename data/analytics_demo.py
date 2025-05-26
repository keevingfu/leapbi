#!/usr/bin/env python3
"""
Anker Creative AI System - Analytics Demo
Demonstrate advanced analytics capabilities using the complete database
"""

import sqlite3
import json
from datetime import datetime, timedelta
from collections import defaultdict

class AnkerAnalytics:
    def __init__(self, db_path):
        self.db_path = db_path
        
    def get_connection(self):
        return sqlite3.connect(self.db_path)
    
    def cross_platform_engagement_analysis(self):
        """Analyze engagement across all platforms"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("🔍 CROSS-PLATFORM ENGAGEMENT ANALYSIS")
        print("="*50)
        
        # TikTok Comments Engagement
        cursor.execute("""
            SELECT 
                'TikTok Comments' as platform,
                COUNT(*) as total_interactions,
                AVG(digg_count) as avg_likes,
                SUM(digg_count) as total_likes,
                COUNT(DISTINCT unique_id) as unique_users
            FROM tiktok_comments
        """)
        tiktok_data = cursor.fetchone()
        
        # KOL Video Insights
        cursor.execute("""
            SELECT 
                'KOL Videos' as platform,
                COUNT(*) as total_videos,
                AVG(kol_views) as avg_views,
                AVG(engagement_rate) as avg_engagement_rate,
                COUNT(DISTINCT content_category) as categories
            FROM insight_tk
        """)
        kol_data = cursor.fetchone()
        
        # Amazon Reviews
        cursor.execute("""
            SELECT 
                'Amazon Reviews' as platform,
                COUNT(*) as total_reviews,
                AVG(star_rating) as avg_rating,
                COUNT(CASE WHEN vp_flag = '是' THEN 1 END) as verified_count,
                COUNT(DISTINCT asin) as unique_products
            FROM amazon_reviews
        """)
        amazon_data = cursor.fetchone()
        
        # YouTube Comments
        cursor.execute("""
            SELECT 
                'YouTube Comments' as platform,
                COUNT(*) as total_comments,
                AVG(vote_count) as avg_votes,
                SUM(vote_count) as total_votes,
                COUNT(DISTINCT video_id) as unique_videos
            FROM youtube_comments
        """)
        youtube_data = cursor.fetchone()
        
        print(f"📱 TikTok Comments:")
        print(f"   Total interactions: {tiktok_data[1]:,}")
        print(f"   Average likes per comment: {tiktok_data[2]:.1f}")
        print(f"   Total likes: {tiktok_data[3]:,}")
        print(f"   Unique users: {tiktok_data[4]:,}")
        
        print(f"\n🎥 KOL Videos:")
        print(f"   Total videos analyzed: {kol_data[1]:,}")
        print(f"   Average views: {kol_data[2]:,.0f}")
        print(f"   Average engagement rate: {kol_data[3]:.2f}%")
        print(f"   Content categories: {kol_data[4]}")
        
        print(f"\n⭐ Amazon Reviews:")
        print(f"   Total reviews: {amazon_data[1]:,}")
        print(f"   Average rating: {amazon_data[2]:.2f} stars")
        print(f"   Verified purchases: {amazon_data[3]:,}")
        print(f"   Unique products: {amazon_data[4]}")
        
        print(f"\n📺 YouTube Comments:")
        print(f"   Total comments: {youtube_data[1]:,}")
        print(f"   Average votes: {youtube_data[2]:.1f}")
        print(f"   Total votes: {youtube_data[3]:,}")
        print(f"   Unique videos: {youtube_data[4]}")
        
        conn.close()
    
    def brand_mention_intelligence(self):
        """Analyze brand mentions across platforms"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n\n🏷️  BRAND MENTION INTELLIGENCE")
        print("="*50)
        
        # TikTok brand mentions
        cursor.execute("""
            SELECT COUNT(*) 
            FROM tiktok_comments 
            WHERE LOWER(text) LIKE '%eufy%' OR LOWER(text) LIKE '%anker%'
        """)
        tiktok_mentions = cursor.fetchone()[0]
        
        # KOL video brand mentions
        cursor.execute("""
            SELECT brand_mentions, COUNT(*) as count
            FROM insight_tk 
            WHERE brand_mentions LIKE '%Eufy%' OR brand_mentions LIKE '%Anker%'
            GROUP BY brand_mentions
            ORDER BY count DESC
        """)
        kol_mentions = cursor.fetchall()
        
        # Amazon review brand mentions
        cursor.execute("""
            SELECT COUNT(*) 
            FROM amazon_reviews 
            WHERE LOWER(review_content) LIKE '%eufy%' OR LOWER(review_title) LIKE '%eufy%'
        """)
        amazon_mentions = cursor.fetchone()[0]
        
        print(f"📱 TikTok Comments: {tiktok_mentions} Anker/Eufy mentions")
        print(f"⭐ Amazon Reviews: {amazon_mentions} Eufy mentions")
        print(f"\n🎥 KOL Video Brand Mentions:")
        for brand, count in kol_mentions[:5]:
            print(f"   {brand}: {count} videos")
    
    def content_performance_analysis(self):
        """Analyze content performance by category"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n\n📊 CONTENT PERFORMANCE ANALYSIS")
        print("="*50)
        
        # KOL content category performance
        cursor.execute("""
            SELECT 
                content_category,
                COUNT(*) as video_count,
                AVG(kol_views) as avg_views,
                AVG(engagement_rate) as avg_engagement,
                AVG(virality_score) as avg_virality
            FROM insight_tk
            GROUP BY content_category
            ORDER BY avg_views DESC
        """)
        
        print("🎯 Content Category Performance:")
        for category, count, views, engagement, virality in cursor.fetchall():
            print(f"   {category}:")
            print(f"     Videos: {count} | Avg Views: {views:,.0f}")
            print(f"     Engagement: {engagement:.2f}% | Virality: {virality:.1f}")
            print()
    
    def creator_roi_analysis(self):
        """Analyze creator return on investment"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n💰 CREATOR ROI ANALYSIS")
        print("="*50)
        
        cursor.execute("""
            SELECT 
                creator_name,
                creator_account,
                follower_count,
                recent_sales_amount,
                video_gpm,
                CASE 
                    WHEN follower_count > 0 THEN recent_sales_amount / follower_count 
                    ELSE 0 
                END as revenue_per_follower
            FROM tiktok_creators
            WHERE recent_sales_amount > 0
            ORDER BY revenue_per_follower DESC
        """)
        
        print("🏆 Top Performing Creators (Revenue per Follower):")
        for creator, account, followers, sales, gpm, rpm in cursor.fetchall():
            print(f"   {creator} (@{account}):")
            print(f"     Followers: {followers:,} | Sales: ${sales:,.0f}")
            print(f"     Revenue per Follower: ${rpm:.4f} | GPM: ${gpm:.1f}")
            print()
        
        conn.close()
    
    def sentiment_analysis_summary(self):
        """Analyze customer sentiment from reviews"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n😊 SENTIMENT ANALYSIS SUMMARY")
        print("="*50)
        
        # Amazon review sentiment distribution
        cursor.execute("""
            SELECT 
                star_rating,
                COUNT(*) as count,
                ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM amazon_reviews), 1) as percentage
            FROM amazon_reviews
            GROUP BY star_rating
            ORDER BY star_rating DESC
        """)
        
        print("⭐ Amazon Review Sentiment Distribution:")
        sentiment_total = 0
        weighted_sum = 0
        
        for rating, count, percentage in cursor.fetchall():
            stars = "⭐" * rating if rating > 0 else "❌"
            print(f"   {stars} {rating} star: {count:,} reviews ({percentage}%)")
            sentiment_total += count
            weighted_sum += rating * count
        
        avg_sentiment = weighted_sum / sentiment_total if sentiment_total > 0 else 0
        print(f"\n📈 Overall Sentiment Score: {avg_sentiment:.2f}/5.0")
        
        # Identify common issues from low-rated reviews
        cursor.execute("""
            SELECT review_title, review_content
            FROM amazon_reviews
            WHERE star_rating <= 2
            ORDER BY RANDOM()
            LIMIT 3
        """)
        
        print(f"\n⚠️  Sample Customer Issues (1-2 star reviews):")
        for title, content in cursor.fetchall():
            short_content = content[:100] + "..." if len(content) > 100 else content
            print(f"   \"{title}\": {short_content}")
        
        conn.close()
    
    def search_opportunity_analysis(self):
        """Identify high-value search opportunities"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n\n🔍 SEARCH OPPORTUNITY ANALYSIS")
        print("="*50)
        
        # High-value, low-competition keywords
        cursor.execute("""
            SELECT 
                keyword,
                search_volume,
                cost_per_click,
                CASE 
                    WHEN cost_per_click > 0 THEN search_volume / cost_per_click 
                    ELSE search_volume 
                END as value_score
            FROM search_suggestions
            WHERE search_volume > 100
            ORDER BY value_score DESC
            LIMIT 10
        """)
        
        print("💎 High-Value Keyword Opportunities:")
        for keyword, volume, cpc, score in cursor.fetchall():
            cpc_display = f"${cpc:.2f}" if cpc is not None else "N/A"
            print(f"   \"{keyword}\":")
            print(f"     Search Volume: {volume:,} | CPC: {cpc_display} | Value Score: {score:.0f}")
        
        conn.close()
    
    def predictive_insights(self):
        """Generate predictive insights based on current data"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n\n🔮 PREDICTIVE INSIGHTS & RECOMMENDATIONS")
        print("="*50)
        
        # Identify trending content categories
        cursor.execute("""
            SELECT 
                content_category,
                AVG(virality_score) as avg_virality,
                COUNT(*) as video_count
            FROM insight_tk
            WHERE virality_score > 10
            GROUP BY content_category
            ORDER BY avg_virality DESC
        """)
        
        print("📈 Trending Content Categories (High Virality):")
        for category, virality, count in cursor.fetchall():
            print(f"   {category}: {virality:.1f} avg virality ({count} videos)")
        
        # Creator partnership recommendations
        cursor.execute("""
            SELECT 
                creator_name,
                creator_account,
                follower_count,
                video_gpm,
                CASE 
                    WHEN video_gpm > 0 AND follower_count > 1000 
                    THEN 'High Priority'
                    WHEN follower_count > 5000 
                    THEN 'Medium Priority'
                    ELSE 'Low Priority'
                END as partnership_priority
            FROM tiktok_creators
            WHERE recent_sales_amount > 0
            ORDER BY video_gpm DESC
        """)
        
        print(f"\n🤝 Creator Partnership Recommendations:")
        for creator, account, followers, gpm, priority in cursor.fetchall():
            print(f"   {creator} (@{account}) - {priority}")
            print(f"     Followers: {followers:,} | GPM: ${gpm:.1f}")
        
        conn.close()
    
    def generate_executive_summary(self):
        """Generate executive summary with key metrics"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        print("\n\n" + "="*60)
        print("📋 EXECUTIVE SUMMARY - KEY PERFORMANCE INDICATORS")
        print("="*60)
        
        # Total engagement across platforms
        cursor.execute("SELECT COUNT(*) FROM tiktok_comments")
        tiktok_comments = cursor.fetchone()[0]
        
        cursor.execute("SELECT COUNT(*) FROM insight_tk")
        kol_videos = cursor.fetchone()[0]
        
        cursor.execute("SELECT COUNT(*) FROM amazon_reviews")
        amazon_reviews = cursor.fetchone()[0]
        
        cursor.execute("SELECT SUM(recent_sales_amount) FROM tiktok_creators")
        total_creator_sales = cursor.fetchone()[0] or 0
        
        cursor.execute("SELECT AVG(star_rating) FROM amazon_reviews")
        avg_customer_satisfaction = cursor.fetchone()[0]
        
        cursor.execute("SELECT AVG(engagement_rate) FROM insight_tk")
        avg_content_engagement = cursor.fetchone()[0]
        
        print(f"📊 PLATFORM COVERAGE:")
        print(f"   • TikTok: {tiktok_comments:,} comments analyzed")
        print(f"   • KOL Videos: {kol_videos:,} videos tracked")
        print(f"   • Amazon: {amazon_reviews:,} reviews processed")
        
        print(f"\n💰 BUSINESS METRICS:")
        print(f"   • Creator Sales Tracked: ${total_creator_sales:,.0f}")
        print(f"   • Customer Satisfaction: {avg_customer_satisfaction:.2f}/5.0 stars")
        print(f"   • Content Engagement Rate: {avg_content_engagement:.2f}%")
        
        print(f"\n🎯 STRATEGIC RECOMMENDATIONS:")
        print(f"   1. Focus on high-engagement content categories")
        print(f"   2. Expand partnerships with top-performing creators")
        print(f"   3. Address customer feedback from low-rated reviews")
        print(f"   4. Leverage high-value keyword opportunities")
        print(f"   5. Optimize cross-platform content distribution")
        
        conn.close()

def main():
    """Run comprehensive analytics demo"""
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    analytics = AnkerAnalytics(db_path)
    
    print("🚀 ANKER CREATIVE AI SYSTEM - ANALYTICS DEMONSTRATION")
    print("🔬 Showcasing advanced data analysis capabilities")
    print(f"⏰ Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Run all analysis modules
    analytics.cross_platform_engagement_analysis()
    analytics.brand_mention_intelligence()
    analytics.content_performance_analysis()
    analytics.creator_roi_analysis()
    analytics.sentiment_analysis_summary()
    analytics.search_opportunity_analysis()
    analytics.predictive_insights()
    analytics.generate_executive_summary()
    
    print(f"\n🎉 Analytics demonstration completed successfully!")
    print(f"💡 These insights can power dashboard visualizations and business decisions")

if __name__ == "__main__":
    main()