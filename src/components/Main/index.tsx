import { useState } from "react";
import { useFormik } from "formik";

import * as S from "./styles";

import Background from "components/Background";
import Header from "components/Header";
import GroupInput from "components/Input";
import Button from "components/Button";

import api from "../../services/api";

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

const Main = function () {
	const [validAuth, setValidAuth] = useState(null);

	const req = async (value: any) => {
		try {
			setValidAuth(false);

			const response = await api
				.get("/wiser")
				.then((response) => response.data);

			response.map(({ email, password }: any) => {
				if (value.email === email && value.password === password) {
					setValidAuth(true);
				}
			});
		} catch (error) {
			alert("Erro no cadastro, tente novamente.");
		}
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => req(values),
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
								value={formik.values.password}
							/>
							{formik.errors.password ? (
								<S.error>{formik.errors.password}</S.error>
							) : null}
						</S.wrapperMessage>

						{validAuth && (
							<S.successAuth>Seu login foi efetuado com sucesso!</S.successAuth>
						)}

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
