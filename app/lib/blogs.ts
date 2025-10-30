// Blog data structure with rich content
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  image: string
  category: string
  description: string
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
    title: "Why Strength Training is the Key to a Healthier You in 2025",
    description:
      "Learn how strength training helps prevent injuries, boost metabolism, and improve posture—plus how to get started safely.",
    excerpt:
      "Discover the power of strength training for a stronger body, better balance, and long-term wellness. Find out how simple tools can make all the difference.",
    author: "Dr. Emily Carter",
    date: "2025-02-10",
    readTime: 7,
    category: "Health & Fitness",
    image: "/weighted-vest-blog.png",
    content: [
      {
        type: "heading",
        text: "The Growing Importance of Strength Training",
      },
      {
        type: "paragraph",
        text: "In 2025, more people than ever are recognizing that strength training isn’t just for athletes—it’s essential for everyone. Whether you’re looking to improve posture, support joint health, or simply feel more energized, strength training plays a crucial role in maintaining overall wellness.",
      },
      {
        type: "heading",
        text: "Why Muscle Strength Matters",
      },
      {
        type: "paragraph",
        text: "Strong muscles help protect your bones, improve balance, and prevent common injuries like back or knee pain. Research shows that adults who engage in regular resistance training experience fewer falls, better mobility, and stronger immune responses.",
      },
      {
        type: "heading",
        text: "How Weak Muscles Lead to Everyday Pain",
      },
      {
        type: "paragraph",
        text: "Sedentary lifestyles, long work hours, and poor posture contribute to muscle weakness—especially in the core and back. This weakness often leads to pain, fatigue, and reduced flexibility. Over time, it can make even simple activities like walking upstairs or carrying groceries feel harder.",
      },
      {
        type: "heading",
        text: "Making Strength Training Simple and Accessible",
      },
      {
        type: "paragraph",
        text: "You don’t need a gym membership or heavy equipment to get started. Bodyweight exercises like squats, lunges, and pushups can build real strength when done consistently. To make these exercises more effective, gradually increasing resistance is key.",
      },
      {
        type: "heading",
        text: "How Weighted Vests Can Help",
      },
      {
        type: "paragraph",
        text: "One of the easiest and most effective ways to increase resistance safely is by using a weighted vest. It evenly distributes weight across your body, enhancing your workouts without putting unnecessary strain on your joints. Whether you’re walking, jogging, or training, it helps build endurance and strength faster.",
      },
      {
        type: "paragraph",
        text: "The Henkelion Adjustable Weighted Vest is a great example—it’s designed for both men and women, offers adjustable weights, and provides balanced comfort for activities like running, training, or even casual walking. With weights included and a secure fit, it helps you get more out of every workout session.",
      },
      {
        type: "heading",
        text: "Start Building a Stronger Future",
      },
      {
        type: "paragraph",
        text: "The journey to better health doesn’t require drastic changes—just consistency and the right tools. Begin with simple exercises, gradually add resistance, and watch your strength, confidence, and posture improve over time. Your future self will thank you.",
      },
    ],
    relatedProductId: "0",
  },
  {
    id: "2",
    title:
      "How I Finally Started Cooking Healthy Meals Without Spending Hours in the Kitchen",
    description:
      "A personal story on discovering how to cook faster, eat healthier, and actually enjoy it again.",
    excerpt:
      "Cooking healthy meals doesn’t have to take forever. Here’s how I simplified my kitchen routine with one smart appliance—and never looked back.",
    author: "Laura Green",
    date: "2025-02-20",
    readTime: 5,
    category: "Lifestyle",
    image: "/cosori-pressure-cooker.png",
    content: [
      {
        type: "heading",
        text: "The Struggle of Everyday Cooking",
      },
      {
        type: "paragraph",
        text: "A year ago, I was constantly skipping home-cooked meals. Between work, errands, and family time, cooking felt like a full-time job. I’d start with good intentions—fresh groceries, a saved recipe—but after a long day, takeout always won.",
      },
      {
        type: "heading",
        text: "Discovering a Simpler Way",
      },
      {
        type: "paragraph",
        text: "One evening, a friend mentioned she cooks full dinners in under 30 minutes using a pressure cooker. Honestly, I didn’t believe her at first. But curiosity won. I started researching, and that’s how I stumbled upon the COSORI Pressure Cooker—a 9-in-1 multi cooker that promised to replace half the gadgets in my kitchen.",
      },
      {
        type: "heading",
        text: "The First Week Changed Everything",
      },
      {
        type: "paragraph",
        text: "I made rice, soup, and even a full pot roast without babysitting the stove. The best part? Cleanup was ridiculously easy, and the ceramic pot didn’t leave any sticky mess. It’s now my go-to for quick, healthy meals that taste like they’ve been simmering for hours.",
      },
      {
        type: "heading",
        text: "Why It Actually Works",
      },
      {
        type: "paragraph",
        text: "The COSORI Pressure Cooker’s 12 safety features gave me peace of mind, and its stainless steel build feels premium. I use it to slow cook, sauté, or even sous vide—all in one pot. It genuinely made cooking less of a chore and more of something I look forward to.",
      },
      {
        type: "heading",
        text: "If You’re Tired of Kitchen Overwhelm",
      },
      {
        type: "paragraph",
        text: "If you’ve ever wanted to eat better but can’t find the time, this might be the simplest change to make. The COSORI Pressure Cooker helps you save hours every week and brings back that joy of homemade food without the stress.",
      },
    ],
    relatedProductId: "1",
  },
]
