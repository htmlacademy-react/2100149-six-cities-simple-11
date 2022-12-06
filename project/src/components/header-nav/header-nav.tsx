import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(logoutAction());
  };

  if (authorizationStatus === AuthorizationStatus.NoAuth || !userData) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile" >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={userData.avatarUrl} style={{ 'borderRadius': '50%' }} alt="User avatar" />
            </div>
            <span className="header__user-name user__name">{userData.email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link to={AppRoute.Main} className="header__nav-link" onClick ={onClickHandler}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
