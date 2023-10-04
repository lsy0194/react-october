import { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.scss';
import clsx from 'clsx';

export default function Layout({ title, children, styleName }) {
	//컴퍼넌트 마운트시 변경할state추가
	const [IsOn, setIsOn] = useState(false);
	//가상돔 요소를 document.querySelector를 쓰지않고 실시간으로 참조하고싶을때
	//빈 참조객체를 useRef로 생성
	const frame = useRef(null);

	useEffect(() => {
		//컴포넌트 마운트시 1번만 호출
		//컴포넌트 마운트시 IsOn값을 trun로 변경
		//IsOn을 useRef가 아닌 state로 변경해야 되는 이유
		//useRef값을 변경해도 리액트는 변경점을 인지못해서 재랜더링이 안되기때문에
		setIsOn(true);
	}, []);
	return (
		//참조하고싶은 가상돔 요소에 ref로 연결
		<section ref={frame} className={clsx(styles.layout, styleName, IsOn ? styles.on : '')}>
			<figure></figure>

			<div className={clsx(styles.content, styleName)}>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
