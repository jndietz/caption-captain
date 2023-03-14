import { useState } from 'react';

import { Configuration } from './Configuration';

export const Caption = () => {
    const [value, setValue] = useState(null);    
    return <Configuration />;    
}