import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';

const Home = () => {
    const { t } = useTranslation();

    return <Section title={t('homePage')}>Hello this is content</Section>;
};

export default Home;
