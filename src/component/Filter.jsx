import React from 'react'
// import Product from './Product'
// import Products from './Products'
// import maxwidth from '../images/max-width_header.jpg'
// import "../Styles/Color.css"


// import Productapi from './Productapi'
// import Product from '../Compomnents/Product'
import "../Style/Filter.scss"


function Filter() {
    return (
        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Attribute</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Women</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Men</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Smart gear</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Accessories</label> <br />
                {/* <img src={maxwidth}/> */}
                <hr />
            </div>
            <div>
                <p>Colours</p>
                <div class="colors">
                    <button class="square"></button><br />
                    <button class="square1"></button><br />
                    <button class="square2"></button><br />
                    <button class="square3"></button><br />
                </div>

                <div class="colors1">
                    <button class="square5"></button><br />
                    <button class="square6"></button><br />
                    <button class="square7"></button><br />
                    <button class="square8"></button>
                </div>
            </div>
            <hr />
            <div>
                <h6>Attribute</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>S</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>M</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>L</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XL</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XXL</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XXXL</label> <br />

                <hr />
            </div>
        </div>
        // <div className='container'>
        //     <div class="aem-Grid aem-Grid--12">
        //         <div class="aem-GridColumn aem-GridColumn--default--3">
        // <div className='filterone'>
        //     <div className='filter'>
        //         <h6>Filters</h6>
        //     </div>
        //     <hr />
        //     <div className='attribute'>
        //         <h6>Attribute</h6>
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         {/* <img src={maxwidth}/> */}
        //         <div className='showmor'>
        //             <a href="#show" class="">
        //                 show more
        //             </a>
        //         </div>
        //         <hr />
        //     </div>
        //     <div>
        //         <h6>Attribute</h6>
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <hr />
        //     </div>


        //     <div>
        //         <div>
        //             <h6>Color</h6>
        //         </div>
        //         <div className='colorfilter'>
        //             <div class="red_div"></div><br />
        //             <div class="red_div1"></div>
        //             <div class="red_div2"></div>
        //             <div class="red_div3"></div>
        //         </div>
        //         <br />
        //         <div className='colorfilter'>
        //             <div class="red_div4"></div><br />
        //             <div class="red_div5"></div>
        //             <div class="red_div6"></div>
        //             <div class="red_div7"></div>
        //         </div>
        //         <br />
        //         <div className='colorfilter'>
        //             <div class="red_div8"></div><br />
        //             <div class="red_div9"></div>


        //         </div>


        //     </div>

        //     <hr />
        //     <div>
        //         <h6>Attribute</h6>
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <input type="checkbox" id="option" name="option" value="option" />
        //         <label>Option</label> <br />
        //         <hr />
        //     </div>
        // </div>
        //         </div>
        //     </div>
        // </div>

        //         <div>
        //                     <div className='filter'>
        //                         <h6>Filters</h6>
        //                     </div>
        //                     <hr/>
        //                     <div>
        //                         <div>
        //                             <h6>Color</h6>
        //                         </div>
        //                         <div className='colorfilter'>
        //                             <div class="red_div"></div><br />
        //                             <div class="red_div1"></div>
        //                             <div class="red_div2"></div>
        //                             <div class="red_div3"></div>
        //                         </div>
        //                         <br />
        //                         <div className='colorfilter'>
        //                             <div class="red_div4"></div><br />
        //                             <div class="red_div5"></div>
        //                             <div class="red_div6"></div>
        //                             <div class="red_div7"></div>
        //                         </div>
        //                         <br />
        //                         <div className='colorfilter'>
        //                             <div class="red_div8"></div><br />
        //                             <div class="red_div9"></div>


        //                         </div>


        //                     </div>

        // <hr/>
        //                     <div className='attribute'>
        //                         <h6>Size</h6>
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>X-small</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>small</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Medium</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Large</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>X-Large</label> <br />
        //                         {/* <img src={maxwidth}/> */}

        //                         <hr />
        //                     </div>
        //                     <div>
        //                         <h6>Style</h6>
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Outdoor</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Casual</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Athleisure</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Running</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Active</label> <br />
        //                         <hr />
        //                     </div>



        //                     <div>
        //                         <h6>Brand</h6>
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Calvin</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Dolce & Gabbana</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Miu Miu</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Prada</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Rag & Bone</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Gucci</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Chanel</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Salvatore Ferragamo</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Marni</label> <br />
        //                         <input type="checkbox" id="option" name="option" value="option" />
        //                         <label>Dior</label> <br />
        //                         <div className='showmor'>
        //                             <a href="#show" class="">
        //                                 show more
        //                             </a>
        //                         </div>
        //                         <hr />
        //                     </div>
        //                     </div>
    )
}

export default Filter