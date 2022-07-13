import styles from "./Login.module.scss";
import { Card } from "components";
import Image from "next/image";
import { useFormik } from 'formik';
import { Input } from 'components';
import * as Yup from 'yup';
export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className={styles.login}>
            <Card >
                <div className={styles.formContainer}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/clickComputer.png"
                            alt="Login"
                            width={300}
                            height={300}
                        />
                    </div>

                    <form className={styles.form} onSubmit={formik.handleSubmit}>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email"
                            handleChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.errors.email}
                        />

                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            handleChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.errors.password}
                        />

                        <button className={styles.submitButton} type="submit">Submit</button>
                    </form>
                </div>
            </Card>
        </div>
    )
}
