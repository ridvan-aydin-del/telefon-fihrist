import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Table } from 'react-bootstrap'

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import { UsersType } from './UserType';

const Formikk = () => {
  const [users,setUsers]=useState<UsersType[]>([]);
    return (
      <div className="container">

  
        <div className="magic-form">

        <Formik
            initialValues={{
              name: '',
              surname: '',
              number: '',
              country: ''
            }}
            
            validationSchema={Yup.object({
              name: Yup.string().required('İsim boş bırakılamaz'),
              surname: Yup.string().required('Soyisim boş bırakılamaz'),
              number: Yup.string().required('Numara boş bırakılamaz'),
              country: Yup.string().required('Ülke boş bırakılamaz'),
            })}
            
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                /*alert(JSON.stringify(values, null, 2));*/
                resetForm();
              }, 500);
              return setUsers((users: UsersType[]) => [...users,values])

              console.log(values);

            }}
          >
            
            {({
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleSubmit,
              handleReset,
              handleChange,
            }) => (
            
                <form className="magic-form" onSubmit={handleSubmit}>
                    <h3>Kaydol</h3>
              
                <label htmlFor="name">İsim</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Rıdvan"
                  className="input"
                  value={values.name}
                  onChange={(e)=>handleChange("name")(e.target.value)}
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}



                <label htmlFor="surname">Soyisim</label>
                <input
                  id="surname"
                  type="text"
                  placeholder="Aydın"
                  className="input"
                  value={values.surname}
                  onChange={(e)=>handleChange("surname")(e.target.value)}
                />
                {errors.surname && touched.surname && (
                  <div className="input-feedback">{errors.surname}</div>
                )}


                <label htmlFor="number">Numara</label>
                <input
                  id="number"
                  type="text"
                  placeholder="0543 864 2326"
                  className="input"
                  value={values.number}
                  onChange={(e)=>handleChange("number")(e.target.value)}
                />
                {errors.number && touched.number && (
                  <div className="input-feedback">{errors.number}</div>
                )}


                <label htmlFor="country">Ülke</label>
                <input
                  id="country"
                  type="text"
                  placeholder="TR"
                  className="input"
                  value={values.country}
                  onChange={(e)=>handleChange("country")(e.target.value)}
                />
                {errors.country && touched.country && (
                  <div className="input-feedback">{errors.country}</div>
                )}
  
                <button type="submit" disabled={!dirty || isSubmitting}>
                  Kaydol
                </button>




                
              </form>
              
            )}
            
          </Formik>
        
          <Table>
                  <thead>
                    <tr>
                      <th>AD</th>
                      <th>SOYAD</th>
                      <th>NUMARA</th>
                      <th>ÜLKE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((x,i)=>
                      <tr>
                        <td>{x.name}</td>
                        <td>{x.surname}</td>
                        <td>{x.number}</td>
                        <td>{x.country}</td>
                      </tr>
                    )}

                    
                  </tbody>
                </Table>  






          
          
        </div>
      </div>
    );
  };

  export default Formikk;