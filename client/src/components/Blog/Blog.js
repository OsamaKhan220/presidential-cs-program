import React from "react"

const Blog = (props) => {
    const { data } = props;
    return (



        <div className={`pack-container ${props.left ? "pack-left" : "pack-right"}`} >
            <div className="pack">
                <div className="horizontal-circle">
                    <div className={`circle ${data.className}`}>
                        <span>
                            {data.number}
                        </span>
                        <span className="line-2"></span>
                    </div>
                </div>
                {!props.left && <div className="verticle-circle circle-right">

                    <div className={`circle ${data.number.split("").reverse().join("")} ${data.className} `}>

                        <span>
                            {data.number}
                        </span>
                    </div>
                </div>}
                <div className="box-container">
                    <h4 className="heading">{data.heading}</h4>
                    <p className="para-data">
                        <img alt="" align="left" className="my-thumbnail" style={{ backgroundImage: `url(${data.image})` }} />
                        {data.para}<br/><br/>{data.para2}
                    </p>
                </div>
                {props.left && <div className="verticle-circle circle-left">
                    <div className={`circle ${data.number.split("").reverse().join()} ${data.className } `}>
                        <span>
                            {data.number}
                        </span>
                    </div>
                </div>}
            </div>
        </div>



    )
}
export default Blog