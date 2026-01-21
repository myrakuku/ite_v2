'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';

// 合作機構數據
// const partners = [
//   { id: 1, name: "AIA", logo: "/partners/AIA.jpeg" },
//   { id: 2, name: "BNI", logo: "/partners/BNI.jpeg" },
//   { id: 3, name: "CT", logo: "/partners/CT.jpeg" },
//   { id: 4, name: "HKCYS", logo: "/partners/HKCYS.jpeg" },
//   { id: 5, name: "HKJC", logo: "/partners/HKJC.jpeg" },
// ];

// 教師團隊數據
const teamMembers = [
  {
    id: 1,
    name: "Mr. Aaron Lung",
    avatar: "/Teacher_WaiLung.webp",
    bio: "With a multidisciplinary background that bridges tech, finance, sales, and leadership, he brings hands-on corporate experience from building systems, managing teams, and scaling businesses in Asia, all while focusing on practical teaching approaches that emphasize job-ready skills in web development, automation, and data analysis."
  },
  {
    id: 2,
    name: "Mr. Honcy Lee",
    avatar: "/Teacher_HoncyLee.webp",
    bio: "The Founder and Director of an IT and financial data analytics company, a former Managing Director at a private tech company, and over 10 years of experience in multinational financial institutions. 10+ Years in Finance & Tech, Now Training the Next Generation of Analysts."
  },
  {
    id: 3,
    name: "Mr. Eric",
    avatar: "/Teacher_Eric.webp",
    bio: "ERP Transformation Mentor with over 15 years of experience in defining industry pain points and driving strategic solutions. As a SME Growth Turbocharger, Eric excels at identifying and capitalizing on opportunities for small and medium enterprises, helping them scale and thrive in a competitive landscape."
  },
];


export default function ITEEducationCenter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 導航欄 */}
      <Nav/>

      {/* 首頁 Banner 區 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-light text-gray-400 mb-2">INNOVATION TREND EDUCATION</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">ITE 背景</h3>
            <p className="text-gray-600 mb-6 font-bold">
              專注於把科技能力「真正落地」到企業日常營運之中。我們多年來應對過不同行業的培訓與轉型需要，熟悉各類團隊常見痛點：流程靠人手、資料分散、報表慢又唔準、跨部門協作斷層、資訊安全靠「小心啲」但無方法論。
            </p>
            <p className="text-gray-600 mb-6 font-light">
              教師隊伍平均擁有超過15年的實戰經驗，成員均為現職於各大政府認可院校的專業人士。此外，我們的講師也包括科技創業公司的創始人，他們不僅具備深厚的學術背景，還擁有豐富的企業服務案例，並熟悉行業的最新技術發展趨勢。教師們將分享一手的創業經驗與市場洞察，讓學員在學習過程中獲得寶貴的行業洞見。
            </p>
            <p className="text-gray-600 mb-6 font-light">
              因此，我們的角色不止是授課——而是以行業理解＋可執行方案，協助企業建立可複製的工作方式，甚至支援跨企業/跨部門的指導與能力對齊，從效率、風險控制到人才成長，全面提升競爭力。
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg">
            <Image 
              src="/banner.png" 
              alt="ITE科技城市" 
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-600/30"></div>
          </div>
        </div>
      </section>

      {/* ITE核心: 創新與改變 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-light text-gray-500 mb-8">ITE核心: 創新與改變</h2>
        <div className="flex justify-between gap-2 md:gap-5">
          <div className="md:ml-20">
            <div className="overflow-hidden">
              <Image 
                src="/b1.png" 
                alt="科技圖示" 
                width={200}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <Image 
                src="/b2.png" 
                alt="科技建築" 
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden">
              <Image 
                src="/b3.png" 
                alt="科技建築" 
                width={200}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          <div className="flex items-center ml-5">
            <p className="text-gray-600 font-light">
              在科技驅動未來的時代，IT人才是社會發展的核心引擎。ITE教育中心自2019年成立以來，便肩負著一個清晰的使命：建立一個連接「教育」、「產業」與「科技」的堅實橋樑。我們不僅是傳授技能的培訓機構，更是孕育下一代科技領袖的創新搖籃。
            </p>
            
          </div>
        </div>
      </section>

      {/* ITE優勢（why US？） */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">ITE優勢（why US？）</h3>
        <p className="text-gray-600 mt-6 font-bold">
          我們最重視「技術轉移」：循序漸進、由淺入深，一步一腳印做到出成果。
        </p>
        <p className="text-gray-600 mt-1 font-light">
          每個主題都以 Demo 演繹帶路：講師先示範「點做」，再帶學員跟住做「做到出嚟」，最後轉化成學員可帶回公司即用的流程、模板或小工具，確保學完唔係得個知字，而係真係做到、用到、交到。
        </p>
        <p className="text-gray-600 mt-6 font-bold">
          資助課程
        </p>
        <p className="text-gray-600 mt-1 font-light">
          我們是「新型工業化及科技培訓計劃」 （NITTP）資格的培訓機構。該計劃可獲得企業就讀的課程費用50%的資助額。為保持課程的質量，每個課程必須經過嚴格的审核，迎合本地環境的需要，確保課程切實地達到最高標準。

        </p>
        <p className="text-gray-600 mt-1 font-light">
          課程涵蓋：自動控制；銀行；生物醫學及醫護；數據通訊；數碼媒體；電子工程；環保；旅遊及飲食業；資訊科技；保險業相關科技；物流業相關科技；職業健康及安全；製造；印刷及出版；品質改善；可持續發展；紡織及製衣；批發/零售及出入口貿易；食品與健康科學等等。
        </p>
      </section>

      {/* 核心課程體系區 */}
      <section className="max-w-7xl mx-auto px-20 py-12 bg-gray-50 rounded-xl my-8">
        <h2 className="text-5xl font-light text-gray-400 mb-2 text-center">Core Curriculum System</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">核心課程體系</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">1</div>
            <h4 className="text-xl font-medium text-gray-800 mb-2 ml-7">
              CyberSecurity（網絡安全）
            </h4>
            <p className="list-disc pl-5 text-gray-600 space-y-1 ml-2">
              現今社會嘅困境係：駭客無處不在，而且中招唔一定因為你公司大——好多時反而因為「意識唔夠」同「習慣唔好」。點樣保護自己？最有效嘅第一步係由安全意識入手：帳號、密碼、權限、釣魚、社工、裝置與雲端使用習慣。我哋會用生活化＋企業真實案例去教：你會知道咩係高風險行為、點樣預防、點樣判斷可疑情況、以及點樣將安全習慣融入日常工作流程，減少「唔小心」造成嘅災難。
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">2</div>
            <h4 className="text-xl font-medium text-gray-800 mb-2 ml-7">
              AI（人工智能應用）
            </h4>
            <p className="list-disc pl-5 text-gray-600 space-y-1 ml-2">
              AI 已經唔係「IT人先用」，而係各行各業都用得著：可以 Gen 圖、Gen 片、Gen 信件、Gen 文案、做會議摘要、做資料整理，甚至幫你 Debug、幫你寫程式。學得好，唔係慳少少時間，而係工作效率可以「以倍計」提升。我哋由入門到應用，唔只教你撳工具，而係教你點樣用AI去解決工作問題：點樣問得啱（Prompt）、點樣驗證、點樣避免「睇落好啱但其實錯」、點樣把AI融入你每日工作流程，實際做到平均節省接近 1/3 時間，並逐步擴大到更高價值嘅工作。
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">3</div>
            <h4 className="text-xl font-medium text-gray-800 mb-2 ml-7">
              Data Analytics（數據分析）
            </h4>
            <p className="list-disc pl-5 text-gray-600 space-y-1 ml-2">
              你可能覺得數據分析同自己無關，但其實同你「息息相關」：因為商業決策、成本控制、資源分配、轉方向、提升產能（量產）——全部都要靠數據支持。無論你做Sales、採購、營運、客服、Marketing、管理層，只要你要交KPI，就一定會遇到「要用數字講嘢」。我哋嘅數據分析課程會由實務問題出發：點樣提取數據、整理、清洗、做分析、做報表同講故事（數據呈現），再連到決策層面——幫你用數據減成本、提效率、搵到更清晰嘅方向。
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">4</div>
            <h4 className="text-xl font-medium text-gray-800 mb-2 ml-7">
              客製化企業培訓課程（Customized Corporate Training）｜上門培訓｜團報方案
            </h4>
            <p className="list-disc pl-5 text-gray-600 space-y-1 ml-2">
              服務概覽
            </p>
            <p className="list-disc pl-5 text-gray-600 space-y-1 ml-2">
              客製化課程設計：按行業、部門、崗位、現有系統與痛點，度身訂造學習路線與案例上門／到校／到公司授課：可配合企業時間（平日/週末/晚間），支援實體＋線上混合團體報讀（政府機構、上市公司、以及非牟利機構 ）：同公司／同部門／跨部門組班，統一目標與交付物，學完即落地
            </p>
          </div>

        </div>
        <div className="mt-12 h-80 overflow-hidden rounded-xl">
          <Image 
            src="/core.png" 
            alt="科技課程" 
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* More Button */}
        <div className="flex justify-center mt-12">
          <Link href='/core'>
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
            <span>了解更多 MORE</span>
            <ChevronRight size={16} />
          </button>
          </Link>
        </div>
      </section>

      {/* 合作機構區 */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-light text-gray-400 mb-2 text-center">Previous Partner Organization</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">過往曾經合作機構</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="w-24 h-12 overflow-hidden flex items-center justify-center">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={100}
                height={100}
                className="w-full h-full object-contain opacity-20 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* 教育團隊區 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-light text-gray-400 mb-2 text-center">Our Professional Team</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">我們專業的教育團隊</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-32 h-32 rounded-full border-2 border-gray-200 overflow-hidden mx-auto mb-4">
                <Image 
                  src={member.avatar} 
                  alt={member.name} 
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">{member.name}</h4>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        {/* More Button */}
        <div className="flex justify-center mt-12">
          <Link href='/ourteam'>
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
            <span>了解更多 MORE</span>
            <ChevronRight size={16} />
          </button>
          </Link>
        </div>
      </section>

      <GoogleMap/>
      <Footer/>
    </div>
  );
}