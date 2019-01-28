// @flow
import React from 'react';

import './styles.css';

type Props = {
    children?: ?any;
    onClick?: ?Function;
}

export const ButtonActive = (props: Props) => (
	<button className="story__button story__button--active" onClick={props.onClick}>{props.children}</button>
);

export const ButtonInactive = (props: Props) => (
	<button className="story__button story__button--inactive" onClick={props.onClick}>{props.children}</button>
);