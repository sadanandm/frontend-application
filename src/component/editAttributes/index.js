import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, FieldArray } from "formik";
import { getTrl, updateProductDetail } from "../store/action";
// Edit page  edit only categories,businessModels, trl
export default function EditAttributes() {
  const dispatch = useDispatch();
  // set all product Details in productDetails variable
  const productDetails = useSelector((state) => state?.reducer?.productData);
  // set all trlData in trlData variable
  const trlData = useSelector((state) => state?.reducer?.trl);
  //  gettrl method is get all Trl data
  useEffect(() => {
    dispatch(getTrl());
  }, []);
  return (
    <>
      {productDetails?.categories && productDetails?.businessModels && (
        <Formik
          enableReinitialize={true}
          initialValues={productDetails}
          onSubmit={ async(values, { resetForm }) => {
            const dataTrl = trlData?.find((item) => values?.trl === item?.id);
            values.trl = dataTrl;
            //  update the atributes
            dispatch(updateProductDetail(values));
            await resetForm('');
          }}
        >
          {(props) => (
            <Form>
              <h1 className="font-medium text-2xl">Categories:</h1>
              <FieldArray
                name="categories"
                className="px-4  bg-input text-black py-2 text-sm border  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600  w-full "
                placeholder="Categories"
                render={() => (
                  <div>
                    {props?.values?.categories &&
                      props?.values?.categories.map((friend, index) => (
                        <div key={index} className="my-2">
                          <Field
                            className="px-4  bg-input text-black py-2 text-sm border  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600  w-full "
                            placeholder="Categories"
                            name={`categories.${[`${index}.name]`]}`}
                            autoComplete="off"
                            onChange={props.handleChange}
                          />
                        </div>
                      ))}
                  </div>
                )}
              />
              <h1 className="font-medium text-2xl">Business Models:</h1>
              <FieldArray
                className="my-2"
                name="businessModels"
                render={() => (
                  <div>
                    {props?.values?.businessModels &&
                      props?.values?.businessModels.map((friend, index) => (
                        <div key={index} className="my-2">
                          <Field
                            className="px-4  bg-input text-black py-2 text-sm border  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600  w-full "
                            placeholder="Business Models"
                            name={`businessModels.${[`${index}.name]`]}`}
                            autoComplete="off"
                            onChange={props.handleChange}
                          />
                          <br></br>
                        </div>
                      ))}
                  </div>
                )}
              />

              <Field
                as="select"
                className="px-4 bg-input text-black py-2 text-sm border  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600  w-full "
                name="trl"
                autoComplete="off"
                onChange={props.handleChange}
              >
                {trlData &&
                  trlData?.map((item, index) => {
                    return (
                      <option key={index} value={item?.id}>
                        {item?.name}
                      </option>
                    );
                  })}
              </Field>
              <div className="mb-2 mt-3 float-right">
                <button
                  className="w-auto bg-btn text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
