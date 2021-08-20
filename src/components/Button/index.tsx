import React, { FunctionComponent, ReactElement } from "react"
import "./style.scss"

export interface IButtonProps {}

export const Button: FunctionComponent<IButtonProps> = (props: IButtonProps): ReactElement<IButtonProps> => (
	<button className="Button">Button</button>
)
