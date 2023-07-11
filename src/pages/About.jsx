import bgImage from "../assets/imagemSobreNos.jpg";

function About() {
  return (
    <div className='flex flex-col'>
      <img src={bgImage} alt='About Us' className='w-full h-1/3' />

      <div id='AboutSection' className='sm:m-16 m-10'>
        <h1 className='mx-8 text-4xl font-bold'>Sobre Nós</h1>
        <p className='sm:mt-12 mt-8 mx-8 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias
          odit quasi animi laboriosam debitis labore delectus neque corporis
          incidunt doloribus similique ipsum quod, ab voluptate dignissimos
          nesciunt dolor. Laudantium illum ipsa aliquam illo ad consequuntur
          exercitationem, beatae mollitia, nemo error consectetur, doloribus
          quos distinctio cum ex delectus veniam perferendis dolores in quis
          iure placeat rem. Recusandae saepe, culpa libero iste ex, natus soluta
          quis reiciendis, quas fuga qui laudantium fugiat doloremque nostrum.
          Quibusdam in quas minima eveniet enim totam? Accusantium temporibus
          sit beatae maiores vitae dignissimos aliquid ullam omnis est
          aspernatur, minima consequatur officiis saepe, earum eius eum
          recusandae fugit excepturi nisi pariatur ut suscipit voluptates!
          Dignissimos hic dolorem sint ab. Perferendis vero quibusdam odit,
          animi, necessitatibus nemo praesentium eveniet accusantium itaque
          numquam adipisci voluptas nihil. Corporis, pariatur quam officiis
          soluta vel consequuntur libero quasi quibusdam dolor labore ea eveniet
          consectetur. Incidunt explicabo similique corrupti ex maiores
          inventore, ut fugit laboriosam illo cupiditate odit at omnis provident
          tempora, delectus dolor officiis neque aspernatur unde quis! Quis
          facilis tempora voluptas, autem et ea illo amet qui nobis numquam
          perferendis quae nam ducimus! Est asperiores obcaecati rerum beatae
          aut perferendis? Quia animi deserunt quae, tempora sequi aliquam
          explicabo similique asperiores dolorum assumenda cum fugiat possimus.
          Ab assumenda rem, quam culpa eos pariatur repellat. Mollitia
          consequatur magni nihil animi minus ab eum.
        </p>
      </div>

      <div id='ContactSection' className='sm:m-16 sm:mt-2 m-10 mt-3'>
        <h1 className='mx-8 text-4xl font-bold'>Contato</h1>

        <div className='flex m-10 sm:pt-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='22'
            viewBox='0 0 25 22'
            fill='none'
          >
            <path
              d='M18.75 0H6.25C2.5 0 0 1.875 0 6.25V15C0 19.375 2.5 21.25 6.25 21.25H18.75C22.5 21.25 25 19.375 25 15V6.25C25 1.875 22.5 0 18.75 0ZM19.3375 7.6125L15.425 10.7375C14.6 11.4 13.55 11.725 12.5 11.725C11.45 11.725 10.3875 11.4 9.575 10.7375L5.6625 7.6125C5.2625 7.2875 5.2 6.6875 5.5125 6.2875C5.8375 5.8875 6.425 5.8125 6.825 6.1375L10.7375 9.2625C11.6875 10.025 13.3 10.025 14.25 9.2625L18.1625 6.1375C18.5625 5.8125 19.1625 5.875 19.475 6.2875C19.8 6.6875 19.7375 7.2875 19.3375 7.6125Z'
              fill='#3C1D02'
            />
          </svg>
          <h2 className='ml-2 mr-1 text-color-custom font-bold'>E-mail:</h2>
          <p>galeno@hotmail.com</p>
        </div>

        <div className='flex m-10 -mt-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <path
              d='M24.9794 11.7615C24.5545 4.51246 17.9679 -1.0743 10.3813 0.17554C5.15702 1.03793 0.970064 5.27485 0.15767 10.4991C-0.317268 13.5237 0.307675 16.3859 1.67 18.7481L0.55763 22.885C0.307663 23.8224 1.17002 24.6723 2.0949 24.4098L6.16938 23.285C8.01914 24.3723 10.1814 24.9972 12.4936 24.9972C19.5426 24.9972 25.3919 18.7855 24.9794 11.7615ZM18.6053 17.1483C18.4928 17.3732 18.3553 17.5857 18.1803 17.7857C17.8679 18.1231 17.5304 18.3731 17.1555 18.5231C16.7805 18.6856 16.3681 18.7605 15.9306 18.7605C15.2932 18.7605 14.6058 18.6107 13.8934 18.2982C13.1685 17.9858 12.4561 17.5732 11.7437 17.0608C11.0188 16.5358 10.3439 15.9484 9.69394 15.311C9.04402 14.6611 8.46906 13.9737 7.94413 13.2613C7.43169 12.5489 7.01927 11.8365 6.71931 11.124C6.41935 10.4116 6.2694 9.72429 6.2694 9.07438C6.2694 8.64942 6.34437 8.23697 6.49435 7.86202C6.64433 7.47457 6.88183 7.12463 7.21928 6.81217C7.61923 6.41222 8.05665 6.22475 8.51909 6.22475C8.69405 6.22475 8.86901 6.26223 9.03149 6.33722C9.19396 6.41221 9.34397 6.5247 9.45647 6.68718L10.9063 8.7369C11.0188 8.89937 11.1063 9.03686 11.1562 9.17434C11.2187 9.31182 11.2437 9.4368 11.2437 9.56179C11.2437 9.71177 11.1937 9.86177 11.1063 10.0117C11.0188 10.1617 10.9063 10.3117 10.7563 10.4616L10.2814 10.9616C10.2064 11.0366 10.1814 11.1115 10.1814 11.2115C10.1814 11.2615 10.1939 11.3115 10.2064 11.3615C10.2314 11.4115 10.2439 11.449 10.2564 11.4865C10.3688 11.699 10.5688 11.9614 10.8438 12.2864C11.1312 12.6114 11.4312 12.9488 11.7562 13.2738C12.0936 13.6112 12.4186 13.9112 12.756 14.1986C13.081 14.4736 13.356 14.6611 13.5684 14.7736C13.6059 14.7861 13.6434 14.8111 13.6809 14.8236C13.7309 14.8486 13.7809 14.8486 13.8434 14.8486C13.9559 14.8486 14.0309 14.8111 14.1059 14.7361L14.5808 14.2611C14.7433 14.0987 14.8933 13.9862 15.0307 13.9112C15.1807 13.8237 15.3182 13.7737 15.4807 13.7737C15.6057 13.7737 15.7306 13.7987 15.8681 13.8612C16.0056 13.9237 16.1556 13.9987 16.3056 14.1112L18.3803 15.586C18.5428 15.6984 18.6553 15.8359 18.7303 15.9859C18.7927 16.1484 18.8302 16.2984 18.8302 16.4733C18.7553 16.6858 18.7053 16.9233 18.6053 17.1483Z'
              fill='#3C1D02'
            />
          </svg>
          <h2 className='ml-2 mr-1 text-color-custom font-bold'>Telefone:</h2>
          <p>(53) 98514-1225</p>
        </div>
      </div>

      <div id='DonationSection' className='sm:m-16 sm:-mt-6 m-10 -mt-2'>
        <h1 className='mx-8 text-4xl font-bold'>Faça uma Doação</h1>
        <p className='mt-10 mx-8 '>
          Nosso site foi criado a partir de uma ideia para ajudar a comunidade,
          portanto é um projeto sem fins lucrativos. Se nosso site te ajuda por
          favor doe para nos ajudar a manter o site atualizado e trazer mais
          informações para melhorar o nosso estilo de vida.
        </p>

        <div className='flex mt-10 mx-8'>
          <h2 className='mx-2 text-color-custom font-bold'>Pix:</h2>
          <p>Número do Pix</p>
        </div>
        <div className='flex mt-5 mx-8'>
          <h2 className='mx-2 text-color-custom font-bold'>Nome:</h2>
          <p>Galeno</p>
        </div>
        <div className='flex mt-5 mx-8'>
          <h2 className='mx-2 text-color-custom font-bold'>Banco:</h2>
          <p>Nome do Banco</p>
        </div>
      </div>
    </div>
  );
}

export default About;

