import React from "react";
import  {randomName}  from '../Helpers/randomName'
import  {randomMessage}  from '../Helpers/randomMessage'

const Livemessage = () => {
    return (
        <div>
            <div className="flex gap-2 items-top my-3 px-2">
                <img
                    className="rounded-full"
                    alt="author_image"
                    src="https://yt3.ggpht.com/xQdI_LJdZTe3pgkXqoomN8hjenMgtew916Hf659oPs39VbvaN4YvuU1LrPYF4DjvglaZvPpaukc=s48-c-k-c0x00ffffff-no-rj"
                />
                <u><span className="font-semibold">{randomName()}</span></u>
                <span>{randomMessage()}</span>
                
            </div>
            <hr/>
        </div>
    );
};

export default Livemessage;
