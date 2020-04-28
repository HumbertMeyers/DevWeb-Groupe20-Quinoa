<?php


namespace App\Controller;


use App\Entity\Evenement;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EvenementRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class EvenementController
{
    private $evenementRepository;

    public function __construct(EvenementRepository $evenementRepository)
    {
        $this->evenementRepository = $evenementRepository;
    }

    /**
     * @Route("/api/evenements/", name="add_evenement", methods={"POST"})
     */
    public function add(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $nom = $data['nom'];
        $periode = $data['periode'];
        $lieu = $data['lieu'];
        $lutte = $data['lutte'];
        $strategie = $data['strategie'];
        $action = $data['action'];
        $victoire = $data['victoire'];
        $anecdote = $data['anecdote'];
        $citation = $data['citation'];

        if (empty($nom) || empty($periode) || empty($lieu) || empty($lutte) || empty($strategie) || empty($action)
            || empty($victoire) || empty($anecdote) || empty($citation)) {
            throw new NotFoundHttpException('Paramètres obligatoires attendus!');
        }

        $this->evenementRepository->saveEvenement($nom, $periode, $lieu, $lutte, $strategie, $action, $victoire, $anecdote, $citation);

        return new JsonResponse(['status' => 'Evenement created!'], Response::HTTP_CREATED);
    }

    /**
     * @Route("/api/evenements/{id}", name="get_un_evenement", methods={"GET"})
     */
    public function get($id): JsonResponse
    {
        $evenement = $this->evenementRepository->findOneBy(['id' => $id]);

        $data = [
            'id' => $evenement->getId(),
            'nom' => $evenement->getNom(),
            'periode' => $evenement->getPeriode(),
            'lieu' => $evenement->getLieu(),
            'lutte' => $evenement->getLutte(),
            'strategie' => $evenement->getStrategie(),
            'action' => $evenement->getAction(),
            'victoire' => $evenement->getVictoire(),
            'anecdote' => $evenement->getAnecdote(),
            'citation' => $evenement->getCitation(),
        ];

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**
     * @Route("/api/evenements/", name="get_tous_evenements", methods={"GET"})
     */
    public function getAll(): JsonResponse
    {
        $evenements = $this->evenementRepository->findAll();
        $data = [];

        foreach ($evenements as $evenement) {
            $data[] = [
                'id' => $evenement->getId(),
                'nom' => $evenement->getNom(),
                'periode' => $evenement->getPeriode(),
                'lieu' => $evenement->getLieu(),
                'lutte' => $evenement->getLutte(),
                'strategie' => $evenement->getStrategie(),
                'action' => $evenement->getAction(),
                'victoire' => $evenement->getVictoire(),
                'anecdote' => $evenement->getAnecdote(),
                'citation' => $evenement->getCitation(),
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**
     * @Route("/api/evenements/update/{id}", name="update_evenement", methods={"PUT"})
     */
    public function update($id, Request $request): JsonResponse
    {
        $evenement = $this->evenementRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true);

        empty($data['nom']) ? true : $evenement->setNom($data['nom']);
        empty($data['periode']) ? true : $evenement->setPeriode($data['periode']);
        empty($data['lieu']) ? true : $evenement->setLieu($data['lieu']);
        empty($data['lutte']) ? true : $evenement->setLutte($data['lutte']);
        empty($data['strategie']) ? true : $evenement->setStrategie($data['strategie']);
        empty($data['action']) ? true : $evenement->setAction($data['action']);
        empty($data['victoire']) ? true : $evenement->setVictoire($data['victoire']);
        empty($data['anecdote']) ? true : $evenement->setAnecdote($data['anecdote']);
        empty($data['citation']) ? true : $evenement->setCitation($data['citation']);

        $updatedEvenement = $this->evenementRepository->updateEvenement($evenement);

        return new JsonResponse($updatedEvenement->toArray(), Response::HTTP_OK);
    }

    /**
     * @Route("/api/evenements/delete/{id}", name="delete_evenement", methods={"DELETE"})
     */
    public function delete($id): JsonResponse
    {
        $evenement = $this->evenementRepository->findOneBy(['id' => $id]);

        $this->evenementRepository->removeEvenement($evenement);

        return new JsonResponse(['status' => 'Evenement deleted'], Response::HTTP_NO_CONTENT);
    }
}