// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    className: String;
    children?: ?any;
    onClick?: ?Function;
}

const ButtonBase = (props: Props) => (
	<button className={props.className} onClick={props.onClick}>{props.children}</button>
);

const Button = styled(ButtonBase)`
    padding: 0.5em 1em;
    border: 0;
    border-radius: 0.5ex;
    text-transform: uppercase;
    color: #fff;
`;

export const ButtonActive = styled(Button)`
    background-color: #F55363;
    cursor: auto;
`;

export const ButtonInactive = styled(Button)`
    background-color: #3C3C3C;
    cursor: pointer;
`;