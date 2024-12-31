import { Spin } from 'antd';
import React from 'react';
import styles from './styles.module.scss';

const Loading = () => {
    return (
        <div className={styles.Custom}>
            <Spin size='large' className='m-auto' />
        </div>
    );
}

export default Loading;
