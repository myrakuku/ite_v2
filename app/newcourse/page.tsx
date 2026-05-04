"use client"; // 需要互動（過濾功能），所以標記為 Client Component

import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Calendar, CheckCircle, ChevronRight, X, ArrowDown, Award } from 'lucide-react';

// 模擬課程數據
const allCourses = [
  {
    id: 1,
    title: "AI 商業應用與自動化實戰證書",
    enTitle: "Professional Certificate in AI Business Integration",
    category: "AI & Automation",
    level: "Advanced Level 3",
    duration: "30 小時",
    mode: "實體 / Zoom",
    startDate: "2024-05-15",
    tags: ["NITTP 資助", "持續進修基金 CEF"],
    description: "專為企業管理層設計，深入解析如何將 Generative AI 導入業務流程，涵蓋 Prompt Engineering 與自動化工作流。",
    isFeatured: true
  },
  {
    id: 2,
    title: "Python 數據分析與視覺化大師班",
    enTitle: "Masterclass in Python for Data Analytics",
    category: "Data Science",
    level: "Beginner to Intermediate",
    duration: "24 小時",
    mode: "實體課",
    startDate: "2024-06-01",
    tags: ["RTTP 認可", "企業包班熱門"],
    description: "從零開始掌握 Python 語法，學習 Pandas 數據處理與 Matplotlib 視覺化，建立數據驅動決策能力。",
    isFeatured: false
  },
  {
    id: 3,
    title: "CISSP 資訊安全系統專家備考班",
    enTitle: "CISSP Exam Preparation Course",
    category: "Cybersecurity",
    level: "Expert Level",
    duration: "40 小時",
    mode: "混合模式",
    startDate: "2024-07-10",
    tags: ["國際認證", "高階職位必備"],
    description: "針對 (ISC)² CISSP 認證考試的八大領域進行深度剖析，協助學員考取資安界黃金證書。",
    isFeatured: false
  },
  {
    id: 4,
    title: "全端 Web 開發實戰營 (React + Node.js)",
    enTitle: "Full-Stack Web Development Bootcamp",
    category: "Software Engineering",
    level: "Intermediate",
    duration: "60 小時",
    mode: "實體課",
    startDate: "2024-05-20",
    tags: ["作品集導向", "就業支援"],
    description: "打造真實電商專案，掌握現代前端框架 React 與後端 Node.js 架構，適合轉職工程師人士。",
    isFeatured: true
  }
];

// 過濾選項
const filters = {
  categories: ["AI & Automation", "Data Science", "Cybersecurity", "Software Engineering"],
  levels: ["Beginner", "Intermediate", "Advanced", "Expert"],
  modes: ["實體課", "Zoom 直播", "混合模式"]
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // 手機版過濾器開關
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* 1. Header: 簡潔有力，強調「學術探索」 */}
      {/* <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">探索專業學程</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            瀏覽我們精心設計的科技與商業課程。無論您是尋求職涯突破的個人，還是希望提升團隊戰力的企業，都能在這裡找到合適的學習路徑。
          </p>
        </div>
      </header> */}

      {/* 1. Hero Section: 學院氣場，非促銷廣告 */}
      <section className="relative bg-slate-900 text-white py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-grid.png')]"></div> {/* 背景紋理 */}
        <div className="container mx-auto px-6 relative z-10 pl-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>NITTP 政府資助認可培訓機構</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6 tracking-tight">
              引領企業 <span className="text-blue-400">科技轉型</span><br />
              培育未來 <span className="text-blue-400">數位人才</span>
            </h1>
            <p className="text-sm md:text-md text-slate-300 mb-5 leading-relaxed max-w-2xl">
              ITE 專注於將前沿科技轉化為可落地的商業技能。從 AI 應用到數據科學，我們提供的不僅是課程，而是企業升級的解決方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                滑動瀏覽專業學程 <ArrowDown className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-slate-500 hover:bg-slate-800 text-white px-8 py-2 rounded-lg font-semibold transition">
                企業培訓諮詢
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* 2. Sidebar Filter (左側過濾欄) - 學院風格 */}
          <aside className={`lg:w-1/4 ${isFilterOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
            <div className="flex justify-between items-center lg:hidden mb-6">
               <h3 className="text-xl font-bold">篩選課程</h3>
               <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
            </div>

            <div className="space-y-8">
              {/* 搜尋框 */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜尋課程關鍵字..." 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              </div>

              {/* 專業領域 (Subject) */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  專業領域 <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Subject</span>
                </h3>
                <div className="space-y-2">
                  {filters.categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${selectedCategory === cat ? 'bg-blue-600 border-blue-600' : 'border-slate-300 bg-white group-hover:border-blue-400'}`}>
                        {selectedCategory === cat && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <input 
                        type="radio" 
                        name="category" 
                        className="hidden" 
                        checked={selectedCategory === cat} 
                        onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                      />
                      <span className={`${selectedCategory === cat ? 'text-blue-700 font-medium' : 'text-slate-600'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 難度 (Level) */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">課程難度</h3>
                <div className="flex flex-wrap gap-2">
                  {filters.levels.map((level) => (
                    <button key={level} className="text-sm px-3 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition">
                      {level}
                    </button>
                  ))}
                </div>
              </div>

               {/* 資助類型 (Funding) - 香港特色重要賣點 */}
               <div>
                <h3 className="font-bold text-slate-900 mb-4">資助與認證</h3>
                <div className="space-y-2">
                  {["NITTP 政府資助", "CEF 持續進修基金", "RTTP 科技券", "官方認證"].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-slate-600">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* 手機版篩選按鈕 */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-slate-300 py-3 rounded-lg font-medium text-slate-700 shadow-sm"
            >
              <Filter className="w-4 h-4" /> 篩選課程條件
            </button>
          </div>

          {/* 3. Main Content (右側課程列表) */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-slate-500 font-medium">顯示 4 個學程</span>
              <select className="bg-transparent border-none text-slate-700 font-medium cursor-pointer focus:ring-0">
                <option>排序：最新開課</option>
                <option>排序：熱門程度</option>
              </select>
            </div>

            <div className="space-y-6">
              {allCourses.map((course) => (
                <div key={course.id} className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                  
                  {/* 重點推薦標籤 */}
                  {course.isFeatured && (
                    <div className="absolute top-0 right-0 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
                      重點推薦
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 左側：基本資訊 */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                          {course.category}
                        </span>
                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                           <BookOpen className="w-3 h-3" /> {course.level}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition">
                        {course.title}
                      </h3>
                      <h4 className="text-sm font-medium text-slate-500 mb-4 font-serif italic">
                        {course.enTitle}
                      </h4>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                        {course.description}
                      </p>

                      {/* 標籤群 */}
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                             <CheckCircle className="w-3 h-3 text-green-500" /> {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 右側：行動呼籲與參數 (Sidebar within card) */}
                    <div className="w-full md:w-56 md:border-l border-slate-100 md:pl-6 flex flex-col justify-between shrink-0">
                      <div className="space-y-3 text-sm text-slate-600 mb-6 md:mb-0">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span>時數：{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 flex items-center justify-center"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span></div>
                          <span>模式：{course.mode}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span>開課：{course.startDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-4">
                        <button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                          查看大綱 <ChevronRight className="w-4 h-4" />
                        </button>
                        <button className="w-full bg-white text-slate-600 border border-slate-200 font-medium py-2.5 rounded-lg hover:bg-slate-50 transition text-sm">
                          下載簡章 (PDF)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 分頁 Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="p-2 border border-slate-200 rounded-md text-slate-400 hover:text-slate-600 disabled:opacity-50" disabled>上一頁</button>
                <button className="w-10 h-10 bg-blue-600 text-white rounded-md font-bold">1</button>
                <button className="w-10 h-10 hover:bg-slate-100 text-slate-600 rounded-md font-medium transition">2</button>
                <button className="w-10 h-10 hover:bg-slate-100 text-slate-600 rounded-md font-medium transition">3</button>
                <span className="text-slate-400 px-2">...</span>
                <button className="p-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50">下一頁</button>
              </nav>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
