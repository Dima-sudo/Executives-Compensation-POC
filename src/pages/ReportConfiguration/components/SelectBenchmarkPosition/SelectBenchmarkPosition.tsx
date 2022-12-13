import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Input from '../../../../components/Input/Input';
import { positions } from '../../../../mocks/Configuration/misc';
import Table from '../../../../components/Table/Table';
import {
    columns,
    rows,
} from '../../../../mocks/Configuration/compensationBreakdownTableMock';

import * as S from './SelectBenchmarkPosition.style';

const SelectBenchmarkPosition = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string | null>('');
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Autocomplete
                value={value}
                onChange={(event: unknown, newValue: string | null) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                disablePortal
                id="autocomplete-position-input"
                options={positions}
                sx={{ width: '100%', marginBottom: '1rem' }}
                renderInput={(params) => (
                    <Input {...params} label="Positions" />
                )}
            />

            <Button sx={{ marginBottom: '1rem' }}>{`+ ${t(
                'configuration.newPosition'
            )}`}</Button>

            {value && (
                <>
                    <S.TableTitle>
                        {t('configuration.compensationBreakdown')}
                    </S.TableTitle>
                    <Table columns={columns} rows={rows} />
                </>
            )}
        </>
    );
};

export default SelectBenchmarkPosition;
