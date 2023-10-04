import Layout from '../../common/layout/Layout';
//import styles from './Department.module.scss';
//import clsx from 'clsx';
import styles from './Gallery.module.scss';

export default function Gallery() {
	return (
		<Layout title={'Gallery'} styleName={styles.gallery}>
			<p>갤러리 페이지입니다.</p>
		</Layout>
	);
}
