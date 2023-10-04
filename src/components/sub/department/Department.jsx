import { useEffect, useState } from 'react';
import Layout from '../../common/layout/Layout';
//import styles from './Department.module.scss';
//import clsx from 'clsx';

export default function Department() {
	const [Department, setDepartment] = useState([]);
	useEffect(() => {
		//해당 useEffect구문은 컴포넌트 마운트시 한번만 동작됨
		fetch('./DB/department.json')
			.then((data) => data.json())
			.then((json) => {
				console.log(json.members);
				setDepartment(json.members);
			});
	}, []);
	return (
		<Layout title={'Department'}>
			{Department.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
					</article>
				);
			})}
		</Layout>
	);
}

/*
	1.외부데이터를 이용해서 fetch를 통해서 가져오는법
	2.useEffect를 이용해서 컴포넌트 마운트시 한번만 외부데이터 fetching
	3.받아온 외부데이터는 useState를 통해서 state에 담아주고, state변경에 따라 화면을 랜더링
	4.state에 담겨있는 데이터로 map으로 반복돌면서 동적으로 돔생성 (JSX)
*/
