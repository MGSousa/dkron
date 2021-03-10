import * as React from 'react';
import { FC } from 'react';
import Icon from '@material-ui/icons/NewReleases';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const PristineJobs: FC<Props> = ({ value }) => {
    return (
        <CardWithIcon
            to='/jobs?filter={"status":"pristine"}'
            icon={Icon}
            title='Pristine Jobs'
            subtitle={value}
        />
    );
};

export default PristineJobs;
