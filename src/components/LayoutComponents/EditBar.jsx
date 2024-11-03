/* eslint-disable no-unused-vars */
import React from "react";
import { degrees, fonts, fontStyles, fontWeight,strokeDasharray, strokeWidth } from "../../../utils/fabricUtils";
import { BsBorderWidth, BsBucket, BsBucketFill } from "react-icons/bs";
import Size from "../shapes/Size";
import Line from "../shapes/Line";

function EditBar(props,ref) {
    return (
        <aside className="edit-bar">
            <div>
                <Size rotation={0}/>
                <input type="number" placeholder="width" className="form-control"/>
            </div>
            <div>
                <Size rotation={90}/>
                <input type="number" placeholder="height" className="form-control"/>
            </div>
            <div>
                <BsBucketFill/>
                <input type="color" placeholder="background color" className="form-control"/>
            </div>
            <div>
                <Line color={""} width="70%"/>
                <input type="color" placeholder="stroke color" className="form-control"/>
            </div>
            <div>
                <BsBorderWidth/>
                <input
                    type="text" 
                    placeholder="stroke width" 
                    className="form-control dropdown-toggle"
                    id="triggerId1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                />
                <div className="dropdown open">
                    <div className="dropdown-menu" aria-labelledby="triggerId1">
                        {
                            strokeWidth.map((item,index)=>(
                                <button className="dropdown-item" key={index}><Line width="80%" strokeWidth={item}/></button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="stroke sequence" 
                    className="form-control dropdown-toggle"
                    id="triggerId2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                />
                <div className="dropdown open">
                    <div className="dropdown-menu" aria-labelledby="triggerId2">
                        {
                            strokeDasharray.map((item,index)=>(
                                <button className="dropdown-item" key={index}><Line strokeDasharray={item} width="100%"/></button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <input type="number" placeholder="corner radius X" className="form-control"/>
            </div>
            <div>
                <input type="number" placeholder="corner radius Y" className="form-control"/>
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="rotate" 
                    className="form-control dropdown-toggle"
                    id="triggerId3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                />
                <div className="dropdown open">
                    <div className="dropdown-menu" aria-labelledby="triggerId3">
                        {
                            degrees.map((item,index)=>(
                                <button className="dropdown-item" key={index}>{item}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="skew X" 
                    className="form-control dropdown-toggle"
                    id="triggerId4"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                />
                <div className="dropdown open">
                    <div className="dropdown-menu" aria-labelledby="triggerId4">
                        {
                            degrees.map((item,index)=>(
                                <button className="dropdown-item" key={index}>{item}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="skew Y" 
                    className="form-control dropdown-toggle"
                    id="triggerId5"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                />
                <div className="dropdown open">
                    <div className="dropdown-menu" aria-labelledby="triggerId5">
                        {
                            degrees.map((item,index)=>(
                                <button className="dropdown-item" key={index}>{item}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <input type="color" placeholder="text color" className="form-control"/>
            </div>
            <div>
                <input type="text" placeholder="font family" list="fonts" className="form-control"/>
                <datalist id="fonts">
                    {
                        fonts.map((item,index)=>(
                            <option value={item} key={index}>{item}</option>
                        ))
                    }
                </datalist>
            </div>
            <div>
                <input type="text" placeholder="font style" list="font-styles" className="form-control"/>
                <datalist id="font-styles">
                    {
                        fontStyles.map((item,index)=>(
                            <option value={item} key={index}>{item}</option>
                        ))
                    }
                </datalist>
            </div>
            <div>
                <input type="text" placeholder="font weight" list="font-weights" className="form-control"/>
                <datalist id="font-weights">
                    {
                        fontWeight.map((item,index)=>(
                            <option value={item} key={index}>{item}</option>
                        ))
                    }
                </datalist>
            </div>
        </aside>
    )
}
export default React.forwardRef(EditBar);