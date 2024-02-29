// Props interface
interface Props {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

/**
 * Component representing post
 */
export default function Post({ id, firstName, lastName, birthDate }: Props) {
  return (
    <div className="bg-zinc-100 border border-1 border-zinc-200 p-4 rounded-lg text-left">
      <div className="text-zinc-400 text-xs">ID: {id}</div>
      <hr className="my-2" />
      <h1 className="font-medium text-lg">
        {firstName} {lastName}
      </h1>
      <p className="text-sm text-zinc-600">{birthDate}</p>
    </div>
  );
}
