import { getTranslations } from 'next-intl/server';
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
  const t = await getTranslations('InforBreedDog');

  return (
    <div>
      <h2>{t('titlePage')}</h2>
      <h4>{`${t('name')} ${breedDogInfor.attributes.name}`}</h4>
      <p>{`${t('description')}: ${breedDogInfor.attributes.description}`}</p>
      <p>{`${t('type')}: ${breedDogInfor.type}`}</p>
    </div>
  );
}
