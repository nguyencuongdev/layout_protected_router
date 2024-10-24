import type { Metadata } from 'next';

interface DogBreedData {
  attributes: {
    name: string;
    description: string;
  };
  type: string;
}

const getInforDetailDogBreed = async (id: string): Promise<DogBreedData> => {
  const res = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
  const dataResponse = await res.json();
  return dataResponse.data;
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id as string;
  const data = await getInforDetailDogBreed(id);
  return {
    title: data.attributes.name,
    description: data.attributes.description,
  };
}

export default async function DetailDogBreedPage({ params }: { params: { id: string } }) {
  const id = params.id as string;
  const breedDogInfor = await getInforDetailDogBreed(id);

  return (
    <div>
      <h2>Thông tin chi tiết giống chó</h2>
      <h4>Tên: {breedDogInfor.attributes.name}</h4>
      <p>Mô tả: {breedDogInfor.attributes.description}</p>
      <p>Loại: {breedDogInfor.type}</p>
    </div>
  );
}
