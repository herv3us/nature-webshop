import { getUserFromLocalStorage } from '../services/localStorageService';

function UserInformation() {
  const user = getUserFromLocalStorage();
  return (
    <div>
      <h2>Hej {user?.firstName}</h2>
      <p>
        Denna information har vi sparat om dig, för att du ska kunna göra köp
        hos oss:
      </p>

      <div>
        <p>
          Namn: {user?.firstName} {user?.lastName}
        </p>
        <p>Adress: {user?.address}</p>
        <p>Postkod: {user?.zipCode}</p>
        <p>Stad: {user?.city}</p>
      </div>
    </div>
  );
}

export default UserInformation;
