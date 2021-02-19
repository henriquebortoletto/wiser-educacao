import React from "react";
import { useFormik } from "formik";

import * as S from "./styles";

import Background from "components/Background";
import Header from "components/Header";
import GroupInput from "components/Input";
import Button from "components/Button";

const validate = (values: any) => {
	const errors: any = {};

	if (!values.email) {
		errors.email = "Campo obrigatório";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "E-mail inválido";
	}

	if (!values.password) {
		errors.password = "Campo obrigatório";
	} else if (values.password.length > 6) {
		errors.password = "Senha deve ter 6 caracteres ou menos";
	}

	return errors;
};

const Main = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<S.Wrapper>
			<Background />
			<S.FormWrapper>
				<S.formContainer>
					<Header
						title="Olá, seja bem vindo!"
						description="Para acessar a plataforma, faça seu login."
					/>
					<form onSubmit={formik.handleSubmit}>
						<S.wrapperMessage>
							<GroupInput
								label="E-mail"
								placeholder="user.name@mail.com"
								id="email"
								name="email"
								type="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							{formik.errors.email ? (
								<S.error>{formik.errors.email}</S.error>
							) : null}
						</S.wrapperMessage>

						<S.wrapperMessage>
							<GroupInput
								label="Senha"
								placeholder="*******"
								id="password"
								name="password"
								type="password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
							/>
							{formik.errors.password ? (
								<S.error>{formik.errors.password}</S.error>
							) : null}
						</S.wrapperMessage>
						<Button type="submit" label="entrar" />
					</form>
					<S.ResetPassword>
						Esqueceu seu login ou senha? <br />
						Clique <a href="#">aqui</a>
					</S.ResetPassword>
				</S.formContainer>
			</S.FormWrapper>
		</S.Wrapper>
	);
};

export default Main;
