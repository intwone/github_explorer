import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Header, InfoRepo, Issues } from './styles';

import logoGithubExplorer from '../../assets/logo-github-explorer.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      console.log(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoGithubExplorer} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={17} />
          Voltar
        </Link>
      </Header>

      <InfoRepo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/42350844?s=460&u=5be2a86ed6eb70245577086ac585361c9cc93d48&v=4" alt="Cassio Oliveira Silva" />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>47</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </InfoRepo>

      <Issues>
        <Link key="" to="Test">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Diego Fernandes</p>
          </div>

          <FiChevronRight size={30} />
        </Link>

        <Link key="" to="Test">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Diego Fernandes</p>
          </div>

          <FiChevronRight size={30} />
        </Link>

        <Link key="" to="Test">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Diego Fernandes</p>
          </div>

          <FiChevronRight size={30} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
