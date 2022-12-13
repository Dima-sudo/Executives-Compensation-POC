import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { IconNamesEnum } from '../../../../components/SvgIcon/SvgIcon.constants';
import Table from '../../../../components/Table/Table';
import {
    columns,
    rows,
} from '../../../../mocks/Configuration/selectComparisonGroupTableMock';

import * as S from './SelectComparisonGroup.style';

const SelectComparisonGroup = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <S.Alert
                    iconName={IconNamesEnum.INFO}
                    message={t('configuration.recommendedConfiguration')}
                />
                <Table columns={columns} rows={rows} />
            </div>

            <Button sx={{ marginTop: '1rem' }}>{`+ ${t(
                'configuration.newKpi'
            )}`}</Button>
        </>
    );
};

export default SelectComparisonGroup;
