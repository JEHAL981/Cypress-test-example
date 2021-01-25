import React from 'react';
import { fetchMembers as defaultFetchMembers } from '../services';

export function MuiscBand({ fetchMembers }) {
    const [status, setStatus] = React.useState('idle');
    const [members, setMembers] = React.useState([]);

    const handleMUSE = () => {
        setStatus('loading');
        fetchMembers()
            .then((response) => {
                setStatus('ready');
                setMembers(response.args.members);
            })
            .catch(() => {
                setStatus('failed');
            });
    };

    return (
        <>
            <h3>Band</h3>
            <button onClick={handleMUSE} disabled={status !== 'idle'}>
                MUSE
            </button>
            {status === 'failed' && <p>Something went wrong.</p>}
            {members.length > 0 && (
                <ul>
                    {members.map((member) => (
                        <li key={member}>{member}</li>
                    ))}
                </ul>
            )}
        </>
    );
}

MuiscBand.defaultProps = {
    fetchMembers: defaultFetchMembers,
};
