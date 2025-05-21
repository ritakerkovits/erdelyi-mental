"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface TestimonialProps {
  name: string
  title: string
  achievements: string[]
  testimonial: string
  imagePosition: "left" | "right"
  imageSrc?: string
}

const Testimonial = ({
  name,
  title,
  achievements,
  testimonial,
  imagePosition,
  imageSrc,
}: TestimonialProps & { imageSrc?: string }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  // Show only first 150 characters when collapsed
  const previewText = testimonial.substring(0, 150) + (testimonial.length > 150 ? "..." : "")

  return (
    <div className="bg-white rounded-xl p-5 shadow-md mb-8 w-full max-w-[1240px] mx-auto">
      <div className={`grid md:grid-cols-3 gap-6 ${imagePosition === "left" ? "" : "md:grid-flow-dense"}`}>
        <div className={`md:col-span-1 ${imagePosition === "right" ? "md:col-start-3" : ""}`}>
          {imageSrc ? (
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${name} portrait`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg w-full h-[200px] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className={`md:col-span-2 ${imagePosition === "right" ? "md:col-start-1" : ""}`}>
          <h2 className="text-xl font-medium text-gray-800 mb-1">{name}</h2>
          <p className="text-gray-600 text-sm mb-3">{title}</p>

          {achievements.length > 0 && (
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          )}

          <div className="text-sm text-gray-700 mb-4">
            <p>{expanded ? `"${testimonial}"` : `"${previewText}"`}</p>
          </div>

          <button className="text-indigo-700 text-sm hover:underline flex items-center" onClick={toggleExpanded}>
            <span>{expanded ? "Mutass kevesebbet" : "Mutass többet"}</span>
            <span className="ml-1">{expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Referenciak() {
  const testimonials = [
    {
      name: "Muhari Eszter",
      title: "Taekwondo válogatott",
      achievements: [
        "Párizs Olimpia 2024 résztvevő",
        "2x Ifjúsági Európa-bajnok ezüstérmes, VB résztvevő (2022)",
        "Felnőtt Világkupa 2023 Barcelona 1. hely, Róma Grand 1. hely, VB résztvevő",
        "2x Felnőtt Országos Bajnokság 1. hely, VB párizsbajnok egyéni",
      ],
      testimonial:
        "Dr. Erdély Kálmán mentálhigiénés közreműködésével a csúcsteljesítmény technikai alkalmazása, energiák hatékonyabb segítése a célom elérésében. Fej-fókusz-közös munka során megtanultam, hogy a gondolataim irányítása és a pozitív hozzáállás kulcsfontosságú a sportban, különösen a versenyek előtt. Ez a megközelítés nemcsak az önbizalmat befolyásolja jelentősen, hanem segít abban is, hogy a stresszt és a nyomást kezeljem a teljesítményhelyzetekben. Az általa megtanított célok kitűzése jelentős a céljaim könnyebb megvalósításában. A mentális felkészülés ugyanolyan fontos, mint a fizikai edzés, és ez a kombinált megközelítés segített elérni a legjobb eredményeimet.",
      imagePosition: "left",
      imageSrc: "/muhari-eszter.jpg",
    },
    {
      name: "Őzsi Blanka",
      title: "Olimpiai válogatott",
      achievements: [
        "Olimpiai résztvevő 2021",
        "Felnőtt Világbajnokság 2024, egyéni 3. hely, csapat 1. hely",
        "Felnőtt Európa-bajnokság 2024, egyéni 2. hely, csapat 1. hely",
        "Junior Európa-bajnokság 2018, 2019, 2. 3-hely",
        "Felnőtt Országos Bajnokság 2. 3-hely",
      ],
      testimonial:
        "Életemben 2022 nagy vita élsportom egyéni mérlegelése. Nem nagyon merítkeztem. Négy a világbajnokságon, hogy a mentális felkészülés mennyire fontos. Erdély Kálmán segítségével tudtam, hogy nem csak a fizikai, hanem a mentális felkészülés is ugyanolyan fontos a versenysportban. Felnőtt világbajnok vagyok a teljesítményorientáltság és célom. Nem csak a megmérettetésen, hanem az edzéshelyszínen is kézben az élsportolónak megküzdenie. A mentális felkészülés segített abban, hogy a versenyeken a legjobb formámat tudjam nyújtani, és hogy a nehéz pillanatokban is megőrizzem a fókuszomat és a motivációmat.",
      imagePosition: "right",
      imageSrc: "/guzi-blanka.jpg",
    },
    {
      name: "Mármarosi Rita",
      title: "Tájfutó válogatott",
      achievements: [
        "3x Tájfutó Európa bajnok (2021, 2022, 2023)",
        "2x Junior Világbajnok (2021)",
        "Felnőtt Világbajnok (2022, 2023)",
        "Összetett magyar bajnok (több)",
        "12x magyar egyéni bajnok (VB)",
      ],
      testimonial:
        "A sportpszichológia segítségével megtanultam, hogyan kezeljem a versenyhelyzeteket és a teljesítménnyel kapcsolatos szorongást és a pszichés stresszt, ami az idő alatt is befolyásolhatja a teljesítményt. Különösen fontosnak találom, hogy megtanultam nem utálni, a saját hibáimat/tévedéseimet hanem építeni azokra, és nem hagyni, hogy a múltbeli kudarcok vagy sikertelenségek visszatartsanak. Segített abban, hogy a stresszt és a nyomást kezeljem a teljesítményhelyzetekben, valamint kitűzzek célokat a következő játékra, amelyek teljesítése vagy elérésére törekszem. A mentális felkészülés ugyanolyan fontos, mint a fizikai edzés, és ez a kombinált megközelítés segített elérni a legjobb eredményeimet.",
      imagePosition: "left",
      imageSrc: "/maramarosi-rita.jpg",
    },
    {
      name: "J. Ivett",
      title: "Szinkronúszás válogatott, kétszeres",
      achievements: [],
      testimonial:
        "2022 óta dolgozunk együtt Kálmánnal. A nyugodt, elfogadó hangulat ÉS nagyon sokat segített a sportban és azon kívül életemben is, hiszen közötti feszültség elkerül is. Nagy 2023 óta az eredményeim jelentősen javultak, és sokkal magabiztosabban állok a versenyekhez. A mentális felkészülés segített abban, hogy a versenyeken a legjobb formámat tudjam nyújtani, és hogy a nehéz pillanatokban is megőrizzem a fókuszomat és a motivációmat.",
      imagePosition: "right",
      imageSrc: "/j-ivett.jpg",
    },
    {
      name: "Szabó Fanni",
      title: "3x VB bronzérmes válogatott",
      achievements: [
        "2x Magyar Bajnok (2017, 2018)",
        "3x Magyar Kupa helyezett (2017, 2019, 2018)",
        "Európa Kupa 2. hely (2021)",
      ],
      testimonial:
        "Erdély Kálmánnal dolgozom, aminek rendkívüli sokat a teljesítményem. Az ő szakértői segítségével megtanultam, hogyan kezeljem a versenyhelyzeteket és a teljesítménnyel kapcsolatos stresszt. Az ő tanácsai nemcsak a fizikális, hanem a mentális felkészülésre is fókuszál, ami különösen a kulcsfontosságú időszakokban segített nekem abban, hogy a legjobb formámat tudjam nyújtani. A mentális felkészülés ugyanolyan fontos, mint a fizikai edzés, és ez a kombinált megközelítés segített elérni a legjobb eredményeimet.",
      imagePosition: "left",
      imageSrc: "/szabo-fanni.jpg",
    },
    {
      name: "Andrejszki Dóra",
      title: "Kézilabda válogatott",
      achievements: [
        "Eb magyar bajnok",
        "Bajnokok Ligája résztvevő",
        "Eb Főiskolás VB résztvevő 2022, 2023, 2024",
        "Magyar megmérettetett",
      ],
      testimonial:
        "Kiemelten sokat köszönhetek a magyar a pszichológusnak, hogy kitartottam a sportpályán való teljesítményem mellett. Megtanultam, hogyan kezeljem a stresszt és a nyomást a versenyhelyzetekben, és hogyan találjak örömet és hatékony teljesítményt a játékban. Négy éve együtt dolgozunk, nagy célokat kitűztem és elértem a célom megvalósul. A mentális felkészülés segített abban, hogy a versenyeken a legjobb formámat tudjam nyújtani, és hogy a nehéz pillanatokban is megőrizzem a fókuszomat és a motivációmat.",
      imagePosition: "right",
      imageSrc: "/andrejszki-dora.jpg",
    },
    {
      name: "Péter Sára",
      title: "Felnőtt női válogatott (több korosztály)",
      achievements: ["Európa diákok egyéni bronzérmes", "Európa Bajnok - 6. helyezett csapat", "Európa Kupa 3. hely"],
      testimonial:
        "Pszichoterápiás kezelések segítségével már képes vagyok kezelni a verseny előtti stresszhelyzeteket, ami jelentős kapacitásbővítő teljesítményt okozott eredményeimben. Korábban szoktam azok a versenyhelyzetek, amelyekben nagy nyomás nehezedett rám, de most már képes vagyok ezeket a helyzeteket kezelni és a legjobb teljesítményt nyújtani. A mentális felkészülés segített abban, hogy a versenyeken a legjobb formámat tudjam nyújtani, és hogy a nehéz pillanatokban is megőrizzem a fókuszomat és a motivációmat.",
      imagePosition: "left",
      imageSrc: "/peter-sara.jpg",
    },
    {
      name: "Horváth Dóra",
      title: "Röplabda edző, versenyző",
      achievements: ["Magyar Bajnok 2022, 2023, 1. hely", "Világbajnokság U23 2021, 24 2001, 1. hely"],
      testimonial:
        "2024 februárban kezdtem el Erdély doktor úrral, ami rendkívüli mértékben változott, ami a közös munka volt az edző-játékos jó játék, a fejlődő versenyszellem már nem a stressz a kérdés problémáim helyett. A mentális felkészülés segített abban, hogy a versenyeken a legjobb formámat tudjam nyújtani, és hogy a nehéz pillanatokban is megőrizzem a fókuszomat és a motivációmat. Különösen fontosnak találom, hogy megtanultam nem utálni a saját hibáimat, hanem építeni azokra.",
      imagePosition: "right",
      imageSrc: "/horvath-dora.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="referenciak" />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12 max-w-[1240px] mx-auto">
          Sportolói referenciák az OSEI keretében végzett szakmai tevékenységemről
        </h1>

        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            achievements={testimonial.achievements}
            testimonial={testimonial.testimonial}
            imagePosition={testimonial.imagePosition}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>

      <Footer />
    </main>
  )
}
