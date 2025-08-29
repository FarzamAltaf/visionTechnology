import { useEffect, useState } from 'react';
import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from 'antd';
import "../App.css";
import Heading from './heading';

const SwipeTab = ({ object }) => {
    const [tabPosition, setTabPosition] = useState('left');
    const [Object, setObject] = useState([]);

    useEffect(() => {
        setObject(object);
    }, [object]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 550) {
                setTabPosition('top');
            }
            else {
                setTabPosition('left');
            }
        }


        handleResize();


        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('resize', handleResize);
        }
    }, []);


    return (
        <>
            <Tabs
                tabPosition={tabPosition}
                className='myTab'
                items={Object.map((obj, index) => {
                    const id = String(index + 1);
                    return {
                        label: (
                            <span className="custom-tab-label">
                                <span className='me-3'>{obj.icon}</span>{obj.title}
                            </span>
                        ),
                        key: id,
                        children: obj.category.map((category, i) => (
                            <div key={i} className="mb-6">
                                <Heading text={category} size={"text-2xl my-4"} />
                                <div className="grid sm:grid-cols-3 gap-3 grid-cols-2">
                                    {obj.content[i].map((data, j) => (
                                        <div
                                            key={j}
                                            className="bg-gray-100 text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-700 ease-in-out flex items-center justify-center"
                                        >
                                            <i className={`${obj.contentIcons[i][j]} text-lg mr-2`}></i>
                                            <span className="transition-transform duration-500 ease-in-out transform translate-y-0">{data}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        )),
                    };
                })}

            />
        </>
    );
};
export default SwipeTab;