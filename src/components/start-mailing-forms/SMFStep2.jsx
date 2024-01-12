/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import img1 from "../../assets/images/start-mailing/radio1.png";
import img2 from "../../assets/images/start-mailing/radio2.png";
import img3 from "../../assets/images/start-mailing/radio3.png";
import { Controller } from "react-hook-form";

const items = [
  "i have already reduced the documents prior to upload!",
  "print documents one page per side of sheet",
  "print documents two pages perside of sheet",
];

const SMFStep2 = ({
  register,
  control,
  setValue,
  setError,
  setFocus,
  errors,
  watch,
}) => {
  return (
    <div>
      <h1 className="smf2_title">HOW SHOULD WE PRINT YOUR DOCUMENTS?</h1>
      <p className="smf2_p">
        We are happy to simply mail your pages out one page per side. The cost
        for this is fifteen cents per page. You may PRE-REDUCE your document
        prior to upload by printing them two pages per side (2UP).If you reduce
        your pages beyond 2 per side, you run the risk of illegible printed
        documents. We will not guarantee readability for documents pre-reduced
        beyond two pages per side and you accept the risk of drawing an
        objection for improper service.
      </p>

      <div className="smf2_second_section">
        <Controller
          name="print_documents"
          control={control}
          render={({ field }) =>
            items.map((item, index) => (
              <div key={index} className="smf2_radio_container">
                <input
                  type="radio"
                  value={item}
                  checked={field.value === item}
                  onChange={() => field.onChange(item)}
                  className="min-w-[29.385px] min-h-[29.385px] cursor-pointer"
                />
                <div>
                  <h1 className="uppercase">{item}</h1>
                  {index === 0 && (
                    <p>THANK YOU FOR MAKING THAT EXTRA EFFORT!</p>
                  )}
                  {index === 1 && <p>STANDARD SETTING</p>}
                  {index === 2 && (
                    <p>
                      SAVE POSTAGE EXPENSE BY HAVING US REDUCE THE DOCUMENTS FOR
                      YOU!
                    </p>
                  )}
                  <img
                    src={
                      (index === 0 && img1) ||
                      (index === 1 && img2) ||
                      (index === 2 && img3)
                    }
                    alt=""
                  />
                </div>
              </div>
            ))
          }
          {...register("print_documents", { required: false })}
        />

        <div className="smf2_radio_container">
          <div className="print_pricing">
            <p>
              *PRINT PRICING IS BASED UPON THE NUMBER OF LETTER SIZED PDF PAGE
              IMAGES UPLOADED AS INDICATED IN YOUR .PDF FILE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMFStep2;
