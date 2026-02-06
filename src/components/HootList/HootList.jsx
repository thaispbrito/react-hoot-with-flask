import { Link } from 'react-router';

const HootList = (props) => {
    return (
        <main>
            {props.hoots.map((hoot) => (
                <Link key={hoot.id} to={`/hoots/${hoot.id}`}>
                    <article>
                        <header>
                            <h2>{hoot.title}</h2>
                            <p>
                                {`${hoot.author_username} posted on
                                ${new Date(hoot.createdAt).toLocaleDateString()}`}
                            </p>
                        </header>
                        <p>{hoot.text}</p>
                    </article>
                </Link>
            ))}
        </main>
    );
};

export default HootList;