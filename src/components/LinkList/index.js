import React from 'react';
import Link from '../Link';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                createdAt
                url
                description
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }
`;

class LinkList extends React.Component {
    render() {

        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching results...</div>
                    if (error) return <div>Error Occured: {error}</div>

                    const linksToRender = data.feed.links;

                    return (
                        <div>
                            {linksToRender.map((link, index) => (
                                <Link key={link.id} link={link} index={index} />
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default LinkList;