<?php

namespace App\Controller;

use App\Entity\Evenement;
use App\Repository\EvenementRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{

    /**
     * @Route("/home", name="home")
     */
    public function home(EvenementRepository $repo)
    {
        return $this->render('pages/home.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route("/inscriptions", name="inscriptions")
     */
    public function inscriptions()
    {
        return $this->render('pages/inscription.html.twig');
    }

    /**
     * @Route("/donnees", name="donnees")
     */
    public function donnees(Request $request)
    {
        $evenement = new Evenement();

        $form = $this->createFormBuilder($evenement)
            ->add('Nom')
            ->add('Periode')
            ->add('Lieu')
            ->add('Lutte')
            ->add('Strategie')
            ->add('Action')
            ->add('Victoire')
            ->add('Anecdote')
            ->add('Citation')
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($evenement);
            $em->flush();

            return new Response('Evenement ajouté');

            $select = mysqli_query($conn, "SELECT * FROM evenements WHERE Nom = '" . $_POST['Nom'] . "'");
            if (mysqli_num_rows($select)) {
                exit('Ce nom est déjà utilisé est déjà utilisé');
            }
        }

        return $this->render('pages/donnees.html.twig', [
            'formDonnees' => $form->createView(),
        ]);
    }
}