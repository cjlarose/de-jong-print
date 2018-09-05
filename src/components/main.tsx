import * as React from 'react';

export interface MainProps { name: string };
export const Main = (props: MainProps) => <h1>Hello {props.name}</h1>;
