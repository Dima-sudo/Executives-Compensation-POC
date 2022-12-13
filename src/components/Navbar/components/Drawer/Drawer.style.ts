import { styled } from '@mui/material/styles';

import DrawerComponent from '@mui/material/Drawer';

// export const Drawer = styled(DrawerComponent)(
//     ({
//         theme: {
//             custom: { params },
//         },
//     }) => ({
//         '& .MuiDrawer-paperAnchorLeft': {
//             height: params.minMainContentContainerHeight,
//             marginTop: params.navbarHeight,
//         },
//     })
// );

export const Drawer = styled(DrawerComponent)(
    ({
        theme: {
            custom: { params },
        },
    }) => ({
        '& .MuiDrawer-paperAnchorLeft': {
            width: params.navbarDrawerWidth,
        },
    })
);
