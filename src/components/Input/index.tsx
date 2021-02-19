import React, { InputHTMLAttributes } from "react";

import * as S from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	placeholder: string;
	id: string;
	name: string;
	type: string;
	value: string;
}

const GroupInput: React.FC<InputProps> = function ({
	label,
	placeholder,
	...rest
}) {
	return (
		<>
			<S.FormGroup>
				<S.Label>{label}</S.Label>
				<S.Input placeholder={placeholder} {...rest} />
			</S.FormGroup>
		</>
	);
};

export default GroupInput;
