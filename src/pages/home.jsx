import { BarChartOutlined, ClockCircleOutlined, DatabaseOutlined, FileSearchOutlined, GlobalOutlined, MessageOutlined, MobileOutlined, PieChartOutlined, ReloadOutlined, TeamOutlined, UsergroupAddOutlined, UserSwitchOutlined } from "@ant-design/icons"
import Heading from "../components/heading"
import Hero from "../components/hero"
import Problem from "../components/problem"
import { ButtonInfo, Indent } from "../components/ThemeConstant"
import CurvedLoop from "../reactbits/CurvedLoop"
import { useEffect, useRef, useState } from "react"
import HowWeHelp from "../components/HowWeHelp"
import ScrollGsap from "../components/gsapScroll"
import SliderComponent from "../components/SliderComponent"
import AnimatedButton from "../components/button"
import VideoSection from "../components/videos"
import Stack from "../components/Stack"
import AnimateHero from "../components/heroAnimation"
import Domain from "../components/domain"
import { FaAngular, FaAws, FaCss3, FaDocker, FaHtml5, FaJava, FaJs, FaLaravel, FaLinode, FaNodeJs, FaPhp, FaPython, FaReact, FaRust, FaSwift, FaUnity, FaVuejs } from "react-icons/fa"
import { DiDotnet } from "react-icons/di"
import { SiRubyonrails } from "react-icons/si"
import { FaDartLang } from "react-icons/fa6"
import IconSlider from "../components/iconSlider"
import SwipeTab from "../components/tabs"

const iconsArray = [
    <FaReact key="react" size={35} />,
    <FaAngular key="angular" size={35} />,
    <FaPhp key="php" size={35} />,
    <FaLaravel key="laravel" size={35} />,
    <FaJava key="java" size={35} />,
    <FaNodeJs key="node" size={35} />,
    <DiDotnet key="net" size={35} />,
    <FaDocker key="net" size={35} />,
    <SiRubyonrails key="net" size={35} />,
    <FaSwift key="swift" size={35} />,
    <FaJs key="js" size={35} />,
    <FaPython key="python" size={35} />,
    <FaRust key="rust" size={35} />,
    <FaUnity key="unity" size={35} />,
    <FaLinode key="linode" size={35} />,
    <FaAws key="aws" size={35} />,
    <FaDartLang key="dartLang" size={35} />,
    <FaVuejs key="vue" size={35} />,
    <FaHtml5 key="html5" size={35} />,
    <FaCss3 key="css3" size={35} />,
];

const tabsObj = [
    {
        title: "Web Platforms",
        icon: <GlobalOutlined key={"Webs"} />,
        category: ['Frontend', 'Backend', 'Fullstack & Framework', 'Library', 'CMS'],
        content: [
            [
                'React.js', 'Angular.js', 'Vue.js', 'Vanilla.js',
                'HTML5', 'CSS3', 'Javascript', 'Typescript',
                'Svelte', 'Three.js', 'jQuery', 'Rest API'
            ],
            [
                'Node.js', 'Express.js', 'Nest.js', 'Php', 'Java', 'C#', 'Python', 'Ruby'
            ],
            [
                'Next.js', 'Laravel', 'Php', 'Nuxt.js', 'Remix.js',
                'Symfony', 'CodeIgniter', 'CakePHP', 'Django',
                'Flask', 'FastAPI', 'Pyramid', 'Ruby on Rails',
                'Spring', 'Hibernate', 'ASP.Net'
            ],
            [
                'Material UI', 'Next UI', 'Ant Design', 'Shade CN', 'Bootstrap',
                'Tailwind CSS', 'Bulma', 'Foundation', 'Semantic UI', 'Chakra UI',
                'React Bootstrap', 'Element UI', 'Vuetify', 'PrimeReact', 'Grommet'
            ],
            [
                'WordPress', 'Drupal',
                'KeystoneJS', 'Grav', 'Netlify CMS',
                'Sanity', 'ButterCMS', 'Directus',
                'Cockpit'
            ]
        ],
        contentIcons: [
            [
                'devicon-react-original', 'devicon-angularjs-plain', 'devicon-vuejs-plain',
                'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain',
                'devicon-javascript-plain', 'devicon-typescript-plain', 'devicon-svelte-plain',
                'devicon-threejs-original', 'devicon-jquery-plain', 'devicon-php-plain'
            ],
            [
                'devicon-nodejs-plain', 'devicon-express-original', 'devicon-nestjs-plain',
                'devicon-php-plain', 'devicon-java-plain', 'devicon-csharp-plain',
                'devicon-python-plain', 'devicon-ruby-plain'
            ],
            [
                'devicon-react-original', 'devicon-laravel-plain', 'devicon-php-plain',
                'devicon-nuxtjs-plain', 'devicon-react-original', 'devicon-symfony-plain',
                'devicon-codeigniter-plain', 'devicon-cakephp-plain', 'devicon-django-plain',
                'devicon-flask-plain', 'devicon-fastapi-plain', 'devicon-python-plain',
                'devicon-ruby-plain', 'devicon-spring-plain', 'devicon-hibernate-plain',
                'devicon-dot-net-plain'
            ],
            [
                'devicon-materialui-plain', 'devicon-nextjs-plain', 'devicon-antdesign-plain',
                'devicon-bootstrap-plain', 'devicon-tailwindcss-plain',
                'devicon-bulma-plain', 'fab fa-foundation', 'devicon-semanticui-plain',
                'devicon-react-original', 'devicon-reactbootstrap-plain', 'devicon-vuejs-plain',
                'devicon-vuejs-plain', 'devicon-react-original', 'devicon-react-original'
            ],
            [
                'devicon-wordpress-plain', 'devicon-drupal-plain',
                'devicon-nodejs-plain',
                'devicon-html5-plain', 'devicon-netlify-plain',
                'devicon-sanity-plain', 'devicon-nodejs-plain',
                'devicon-nodejs-plain', 'devicon-nodejs-plain'
            ]
        ]
    },

    {
        title: "Mobile Apps",
        icon: <MobileOutlined key={"MobileApps"} />,
        category: ['Android', 'iOS'],
        content: [
            // Android Development Content
            [
                'Java', 'Kotlin', 'Android Studio', 'Gradle', 'XML', 'Retrofit', 'Room', 'Jetpack Compose', 'Flutter'
            ],
            // iOS Development Content
            [
                'Swift', 'Objective-C', 'Xcode', 'CocoaPods', 'UIKit', 'SwiftUI', 'Core Data', 'Combine'
            ]
        ],
        contentIcons: [
            // Android Development Icons
            [
                'devicon-java-plain', 'devicon-kotlin-plain', 'devicon-android-plain',
                'devicon-gradle-plain', 'devicon-xml-plain', 'devicon-retrofit-plain',
                'devicon-room-plain', 'devicon-jetpackcompose-plain', 'devicon-flutter-plain'
            ],
            // iOS Development Icons
            [
                'devicon-swift-plain', 'devicon-objectivec-plain', 'devicon-xcode-plain',
                'devicon-cocoapods-plain', 'devicon-uikit-plain', 'devicon-swift-plain',
                'devicon-core-data-plain', 'devicon-combine-plain'
            ]
        ]
    },

    {
        title: "Databases",
        icon: <DatabaseOutlined key={"Databases"} />,
        category: ['SQL Databases', 'NoSQL Databases'],
        content: [
            // SQL Databases
            [
                'SQL', 'MySQL', 'PostgreSQL', 'IBM Db2', 'Oracle', 'SQLite'
            ],
            // NoSQL Databases
            [
                'MongoDB', 'Cassandra', 'Couchbase', 'Redis', 'Firebase', 'Amazon DynamoDB'
            ]
        ],
        contentIcons: [
            // SQL Databases Icons
            [
                'devicon-microsoftsqlserver-plain', 'devicon-mysql-plain', 'devicon-postgresql-plain',
                'devicon-ibm-plain', 'devicon-oracle-plain', 'devicon-sqlite-plain'
            ],
            // NoSQL Databases Icons
            [
                'devicon-mongodb-plain', 'devicon-cassandra-plain', 'devicon-couchbase-plain',
                'devicon-redis-plain', 'devicon-firebase-plain', 'devicon-amazonwebservices-plain'
            ]
        ]
    },

    {
        title: "SEO",
        icon: <FileSearchOutlined key={"SEO"} />, // Replace with your SEO icon
        category: ['On-page SEO', 'Off-page SEO', 'Technical SEO'],
        content: [
            // On-page SEO Content
            [
                'Keyword Research', 'Content Optimization', 'Meta Tags',
                'Header Tags', 'Image Optimization', 'Internal Linking',
                'URL Structure', 'User Experience'
            ],
            // Off-page SEO Content
            [
                'Backlink Building', 'Social Media Marketing', 'Influencer Outreach',
                'Guest Blogging',
            ],
            // Technical SEO Content
            [
                'Site Speed Optimization', 'Mobile Optimization', 'SSL',
                'XML Sitemap', 'Robots.txt', 'Structured Data',
                'Canonical Tags', 'Site Architecture'
            ]
        ],
        contentIcons: [
            // On-page SEO Icons (using Font Awesome)
            [
                'fa-solid fa-key', 'fa-solid fa-file-alt', 'fa-solid fa-tags',
                'fa-solid fa-heading', 'fa-solid fa-image', 'fa-solid fa-link',
                'fa-solid fa-link', 'fa-solid fa-user-check'
            ],
            // Off-page SEO Icons
            [
                'fa-solid fa-link', 'fa-brands fa-facebook', 'devicon-twitter-original',
                'fa-brands fa-instagram'
            ],
            // Technical SEO Icons
            [
                'fa-solid fa-tachometer-alt', 'fa-solid fa-mobile-alt', 'fa-solid fa-shield-alt',
                'fa-solid fa-sitemap', 'fa-solid fa-robot', 'fa-solid fa-code',
                'fa-solid fa-tags', 'fa-solid fa-project-diagram'
            ]
        ]
    }

]

const Home = () => {
    const sectionRef = useRef(null);
    const problemsContainerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMore, setIsMore] = useState(false);
    const [isMoreSolutions, setIsMoreSolutions] = useState(false);

    const ref = useRef(null);

    const MoreFeature = () => {
        if (!isMore) {
            setIsMore(true);
            setTimeout(() => {
                problemsContainerRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 300);
        } else {
            setIsMore(false);
            setTimeout(() => {
                problemsContainerRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    const MoreSolutions = () => {
        if (!isMoreSolutions) {
            setIsMoreSolutions(true);
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 300);
        } else {
            setIsMoreSolutions(false);
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    const handleScroll = () => {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            setIsVisible(true);
            window.removeEventListener("scroll", handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });


    return (
        <>
            <div>

                <AnimateHero />

                <div className="overflow-hidden">
                    <Hero />
                </div>

                <div className="w-full h-svh border-t-2 border-t-black -mt-2 bg-gradient-to-b from-black to-white">
                    <div className="max-w-screen overflow-hidden -mt-40 sm:-mt-7">
                        <CurvedLoop
                            marqueeText="Lorem ipsum dolor sit amet consectetur adipisicing elit ✦ Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam vero ✦ "
                            speed={3}
                            curveAmount={100}
                            direction="left"
                            interactive={false}
                            className="sm:text-5xl overflow-hidden tracking-wider font-black"
                        />
                    </div>
                </div>

                <div className={`${Indent} -mt-100 sm:-mt-24`}>
                    <Heading text={"Is your"} span={" software"} textTwo={" struggling with any of these problems?"} size={"text-3xl sm:text-5xl"} classes={"text-white sm:text-black"} />
                    <div ref={problemsContainerRef} className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <Problem icon={<UserSwitchOutlined />} text={"High Operational Costs"} />
                            <Problem icon={<PieChartOutlined />} text={"Lack of User Insights"} />
                            <Problem icon={<TeamOutlined />} text={"Limited Scalability"} />
                            <Problem icon={<MessageOutlined />} text={"Lack of Mobile Optimization"} />
                            {isMore ?
                                <>
                                    <span className={`show-more-transition ${isMore ? 'show-more-expand' : 'show-more-collapse'}`}>
                                        <Problem icon={<BarChartOutlined />} text={"Difficulty in Data Management"} />
                                    </span>
                                    <span className={`show-more-transition ${isMore ? 'show-more-expand' : 'show-more-collapse'}`}>
                                        <Problem icon={<ClockCircleOutlined />} text={"Inconsistent Branding"} />
                                    </span>
                                    <span className={`show-more-transition ${isMore ? 'show-more-expand' : 'show-more-collapse'}`}>
                                        <Problem icon={<UsergroupAddOutlined />} text={"Poor Website Performance"} />
                                    </span>
                                    <span className={`show-more-transition ${isMore ? 'show-more-expand' : 'show-more-collapse'}`}>
                                        <Problem icon={<ReloadOutlined />} text={"Inability to Adapt to Market Changes"} />
                                    </span>
                                </> :
                                <>
                                    <Problem icon={<BarChartOutlined />} text={"Difficulty in Data Management"} className={`hidden lg:block`} />
                                    <Problem icon={<ClockCircleOutlined />} text={"Inconsistent Branding"} className={`hidden lg:block`} />
                                    <Problem icon={<UsergroupAddOutlined />} text={"Poor Website Performance"} className={`hidden lg:block`} />
                                    <Problem icon={<ReloadOutlined />} text={"Inability to Adapt to Market Changes"} className={`hidden lg:block`} />
                                </>
                            }
                        </div>
                        <div className="flex justify-center mt-2 lg:hidden">
                            <AnimatedButton text={`${isMore ? 'Show less' : 'See more'}`} theme={`${ButtonInfo}`} onClick={MoreFeature} />
                        </div>
                    </div>
                </div>

                <div className={`${Indent}`}>
                    <section ref={sectionRef} className="text-gray-600 my-6">
                        <div className="container mx-auto">
                            <div className="flex flex-col text-start w-full mb-12">
                                <Heading text={"Your software hurdles"} span={", "} textTwo={"our commitments"} size={"text-3xl sm:text-5xl"} classes={"text-black"} />
                            </div>
                            <div className="flex flex-wrap -m-4 justify-center">
                                <HowWeHelp
                                    icon={<UserSwitchOutlined />}
                                    title={"High Operational Costs"}
                                    description={"We provide streamlined software solutions to cut operational costs efficiently."}
                                />
                                <HowWeHelp
                                    icon={<PieChartOutlined />}
                                    title={"Difficulty in Data Management"}
                                    description={"Our systems simplify data management, giving you a unified platform to leverage data."}
                                />
                                <HowWeHelp
                                    icon={<TeamOutlined />}
                                    title={"Lack of User Insights"}
                                    description={"We implement advanced analytics tools to help you gain valuable user behavior insights."}
                                />
                                <HowWeHelp
                                    icon={<MessageOutlined />}
                                    title={"Inconsistent Branding"}
                                    description={"Our branding services ensure a cohesive strategy across all platforms for brand trust."}
                                />
                                <HowWeHelp
                                    className={`${isMoreSolutions ? 'block' : 'hidden'} lg:block`}
                                    icon={<BarChartOutlined />}
                                    title={"Limited Scalability"}
                                    description={"WWe design scalable solutions that grow with your business, allowing for easy adaptation."}
                                />
                                <HowWeHelp
                                    className={`${isMoreSolutions ? 'block' : 'hidden'} lg:block`}
                                    icon={<ClockCircleOutlined />}
                                    title={"Poor Website Performance"}
                                    description={"Our web services optimize performance, ensuring fast, responsive websites for users."}
                                />
                                <HowWeHelp
                                    className={`${isMoreSolutions ? 'block' : 'hidden'} lg:block`}
                                    icon={<ReloadOutlined />}
                                    title={"Lack of Mobile Optimization"}
                                    description={"We create mobile-friendly sites that enhance accessibility for customers on the go."}
                                />
                                <HowWeHelp
                                    className={`${isMoreSolutions ? 'block' : 'hidden'} lg:block`}
                                    icon={<UsergroupAddOutlined />}
                                    title={"Inability to Adapt to Market Changes"}
                                    description={"Our agile development practices let you quickly respond to market shifts and trends."}
                                />
                            </div>
                            <div className="flex justify-center mt-2 lg:hidden">
                                <AnimatedButton text={`${isMoreSolutions ? 'Show less' : 'See more'}`} theme={`${ButtonInfo}`} onClick={MoreSolutions} />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-18">
                    <Stack />
                </div>

                <section >
                    <VideoSection />
                </section>

                <section >
                    <ScrollGsap />
                </section>

                <div>
                    <SliderComponent items={['Mobile Apps', 'Web Solutions', 'UI/UX Design', 'Digital Strategy', 'SEO Excellence', 'Marketing Edge']} />
                </div>

                <div ref={ref} className={`my-24 mx-auto text-center ${isVisible ? 'slide-in' : ''}`}>
                    <Heading text={"We Create "} span={"Digital"} br2={<br />} span2={"Solutions "} textThree={"For You."} classes={"text-center hidden sm:block mt-2 mx-4"} size={"text-5xl md:text-7xl"} />
                    <Heading text={"Your "} br1={<br />} span={"Business Our "} br2={<br />} textTwo={"Responsibility."} classes={"text-left sm:hidden mt-2 mx-4"} size={"text-5xl md:text-7xl"} />
                </div>

                <div className="mx-7 md:mx-12">
                    <Heading text={"Who we work with"} span={"."} size={"text-3xl sm:text-5xl my-6"} />
                    <p className="w-10/12 mb-12 sm:text-xl">Our extensive portfolio of services and deep expertise across leading industries allow us to understand your unique challenges and deliver customized solutions. Our goal is not only to address your challenges but also to create lasting impact and measurable success.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-outfit justify-items-center">
                        <Domain
                            title={"Education"}
                            para={"Transform the ed-tech landscape with solutions designed to enhance student engagement and streamline learning."}
                            skills={['Student Portal', 'CRM', 'Homework Hub', 'Parent']}
                        />
                        <Domain
                            title={"Hospitality"}
                            para={"Experience user-centric solutions that improve guest satisfaction and foster lasting relationships."}
                            skills={['Booking Engine', 'Survey Tools', 'CRM', 'Event']}
                        />
                        <Domain
                            title={"MedCare"}
                            para={"MedCare solutions optimize healthcare operations, ensuring efficiency while enhancing the quality of patient care."}
                            skills={['Appointment Scheduling System', 'RCM', 'Portal']}
                        />
                        <Domain
                            title={"Education"}
                            para={"Transform the ed-tech landscape with solutions designed to enhance student engagement and streamline learning."}
                            skills={['Student Portal', 'CRM', 'Homework Hub', 'Parent']}
                        />
                        <Domain
                            title={"Hospitality"}
                            para={"Experience user-centric solutions that improve guest satisfaction and foster lasting relationships."}
                            skills={['Booking Engine', 'Survey Tools', 'CRM', 'Event']}
                        />
                        <Domain
                            title={"MedCare"}
                            para={"MedCare solutions optimize healthcare operations, ensuring efficiency while enhancing the quality of patient care."}
                            skills={['Appointment Scheduling System', 'RCM', 'Portal']}
                        />
                    </div>
                </div>

                <div className="my-16">
                    <IconSlider items={iconsArray} />
                </div>

                <div className="my-4 mx-6">
                    <Heading text={"Our Technology Stack"} span={"."} size={"text-3xl sm:text-5xl my-6"} />
                    <p className="w-10/12 mb-16 sm:text-xl">Our extensive portfolio of services and deep expertise across leading industries enable us to understand your unique challenges and provide personalized solutions. Our goal is not only to tackle your challenges but also to create a lasting impact and measurable success.</p>
                    <SwipeTab
                        object={tabsObj}
                    />
                </div>
            </div >
        </>
    )
}

export default Home