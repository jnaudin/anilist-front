import styled from "@emotion/styled";
import { useGetMediaPageQuery } from "./generated/graphql";

const Container = styled.div`
  display: flex;
  column-gap: 16px;
  flex-wrap: wrap;
  label: main-container;
`;

const MediaCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  column-gap: 16px;
  label: media-card;
`;

export const MangaList = ({ genre }: { genre: string }) => {
  const { loading, error, data } = useGetMediaPageQuery({
    variables: { page: 0, perPage: 20, search: undefined, genre },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      {data?.Page?.media?.map((media) => (
        <MediaCard key={media?.id}>
          <div>{media?.title?.english}</div>
          <div>
            <img src={media?.coverImage?.medium || undefined} />
          </div>
        </MediaCard>
      ))}
    </Container>
  );
};
