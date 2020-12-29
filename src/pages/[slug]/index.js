import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { View } from 'react-native';
import ScreenHome from '../../components/screenHome';
import ScreenSettings from '../../components/screenSettings';
import ScreenModal from '../../components/screenModal';
import { ROUTES } from '../../config';

const pages = {};
pages[ROUTES.HOME] = ScreenHome;
pages[ROUTES.SETTINGS] = ScreenSettings;
pages[ROUTES.MODAL] = ScreenModal;

const App = () => {
    const router = useRouter();
    useEffect(() => {
    }, [router.asPath]);
    const Page = pages[router.query?.slug] || View;

    return (
        <Page router={router} />
    );
};

export default App;
