// Blog data structure with rich content
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  image: string
  content: BlogContent[]
  relatedProductId: string
}

export interface BlogContent {
  type: "heading" | "paragraph"
  text: string
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Still Have Back Pain in 2025? Here's What You Need to Know",
    excerpt:
      "Discover proven strategies and solutions to finally eliminate chronic back pain and improve your quality of life.",
    author: "Dr. Sarah Johnson",
    date: "2025-01-15",
    readTime: 8,
    image: "/newshoe.jpg",
    content: [
      {
        type: "heading",
        text: "Understanding Modern Back Pain",
      },
      {
        type: "paragraph",
        text: "Back pain has become one of the most common health complaints in the modern world. Whether you're working from home, sitting at a desk, or spending hours on your feet, your back is constantly under stress. In 2025, we have more tools and knowledge than ever before to address this issue effectively.",
      },
      {
        type: "heading",
        text: "The Root Causes of Chronic Back Pain",
      },
      {
        type: "paragraph",
        text: "Most back pain stems from poor posture, weak core muscles, and prolonged sitting. Our sedentary lifestyles have created a perfect storm for back problems. The average person sits for 7-8 hours per day, which puts tremendous strain on the lumbar spine.",
      },
      {
        type: "paragraph",
        text: "Additionally, stress and tension can cause muscles to tighten, leading to pain and discomfort. Mental stress often manifests as physical tension in the back and shoulders, creating a vicious cycle that's hard to break.",
      },
      {
        type: "heading",
        text: "Proven Solutions That Work",
      },
      {
        type: "paragraph",
        text: "The good news is that back pain is highly treatable. Regular exercise, particularly core strengthening exercises, can significantly reduce pain. Stretching and flexibility work are equally important for maintaining a healthy spine.",
      },
      {
        type: "paragraph",
        text: "Ergonomic improvements to your workspace can make a dramatic difference. Investing in a good chair, adjustable desk, and proper monitor placement can reduce strain on your back by up to 40%.",
      },
      {
        type: "heading",
        text: "The Role of Technology and Support",
      },
      {
        type: "paragraph",
        text: "Modern technology has given us innovative solutions for back pain management. From ergonomic devices to wearable technology that tracks posture, there are more options than ever before. Smart devices can remind you to adjust your posture and provide real-time feedback on your sitting habits.",
      },
      {
        type: "paragraph",
        text: "Many people find that combining traditional methods like exercise and stretching with modern ergonomic solutions provides the best results. The key is finding what works for your specific situation and staying consistent with your approach.",
      },
      {
        type: "heading",
        text: "Take Action Today",
      },
      {
        type: "paragraph",
        text: "Don't let back pain control your life. Start with small changes: improve your posture, take regular breaks, and invest in ergonomic solutions. Your back will thank you, and you'll notice improvements within just a few weeks of consistent effort.",
      },
    ],
    relatedProductId: "2", // Smart Watch Pro for posture tracking
  },
  {
    id: "2",
    title: "The Ultimate Guide to Wireless Audio in 2025",
    excerpt:
      "Explore the latest advancements in wireless audio technology and find the perfect headphones for your lifestyle.",
    author: "Mike Chen",
    date: "2025-01-10",
    readTime: 6,
    image: "/blog-audio.jpg",
    content: [
      {
        type: "heading",
        text: "The Evolution of Wireless Audio",
      },
      {
        type: "paragraph",
        text: "Wireless audio technology has come a long way in recent years. What started as a convenience feature has become a necessity for most people. Today's wireless headphones offer sound quality that rivals wired alternatives, with the added benefit of freedom and mobility.",
      },
      {
        type: "heading",
        text: "Key Features to Look For",
      },
      {
        type: "paragraph",
        text: "When choosing wireless headphones, consider noise cancellation, battery life, comfort, and sound quality. Active noise cancellation has become standard in premium models, allowing you to enjoy your music without external distractions.",
      },
      {
        type: "paragraph",
        text: "Battery life is crucial for daily use. Look for headphones that offer at least 20-30 hours of battery life, with quick charging capabilities for those times when you need a quick top-up.",
      },
      {
        type: "heading",
        text: "Finding Your Perfect Match",
      },
      {
        type: "paragraph",
        text: "The best headphones for you depend on your lifestyle and preferences. Whether you're a commuter, fitness enthusiast, or office worker, there's a perfect pair waiting for you. Consider your primary use case and choose accordingly.",
      },
    ],
    relatedProductId: "1", // Premium Wireless Headphones
  },
]
