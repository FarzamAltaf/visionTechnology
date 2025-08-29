import { Footer } from "antd/es/layout/layout";
import React from 'react'

const Footers = () => {
    return (
        <>
            <Footer
                className='font-outfit'
                style={{
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'black',
                    marginTop: 'auto',
                }}
            >
                &copy; {new Date().getFullYear()} FA Internationals. All rights reserved.
            </Footer>
        </>
    )
}

export default Footers