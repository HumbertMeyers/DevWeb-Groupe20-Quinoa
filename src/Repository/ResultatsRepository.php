<?php

namespace App\Repository;

use App\Entity\Resultats;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Resultats|null find($id, $lockMode = null, $lockVersion = null)
 * @method Resultats|null findOneBy(array $criteria, array $orderBy = null)
 * @method Resultats[]    findAll()
 * @method Resultats[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResultatsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Resultats::class);
    }

    /**
     * Sauve les résultats en bases de donnes
     */
    public function saveResultats($idSession, $reponse1, $reponse2, $reponse3, $reponse4, $reponse5, $reponse6,
                                  $reponse7, $reponse8, $reponse9, $reponse10, $reponse11, $reponse12, $reponse13,
                                  $reponse14, $reponse15, $reponse16, $reponse17, $reponse18, $reponse19, $reponse20,
                                  $reponse21, $reponse22, $reponse23, $reponse24, $reponse25, $reponse26, $reponse27,
                                  $reponse28, $reponse29, $reponse30, $reponse31, $reponse32, $reponse33, $reponse34,
                                  $reponse35, $reponse36, $reponse37, $reponse38, $reponse39, $reponse40)
    {
        $newResultats = new Resultats();

        $newResultats->setIdSession($idSession);
        $newResultats->setReponse1($reponse1);
        $newResultats->setReponse2($reponse2);
        $newResultats->setReponse3($reponse3);
        $newResultats->setReponse4($reponse4);
        $newResultats->setReponse5($reponse5);
        $newResultats->setReponse6($reponse6);
        $newResultats->setReponse7($reponse7);
        $newResultats->setReponse8($reponse8);
        $newResultats->setReponse9($reponse9);
        $newResultats->setReponse10($reponse10);
        $newResultats->setReponse11($reponse11);
        $newResultats->setReponse12($reponse12);
        $newResultats->setReponse13($reponse13);
        $newResultats->setReponse14($reponse14);
        $newResultats->setReponse15($reponse15);
        $newResultats->setReponse16($reponse16);
        $newResultats->setReponse17($reponse17);
        $newResultats->setReponse18($reponse18);
        $newResultats->setReponse19($reponse19);
        $newResultats->setReponse20($reponse20);
        $newResultats->setReponse21($reponse21);
        $newResultats->setReponse22($reponse22);
        $newResultats->setReponse23($reponse23);
        $newResultats->setReponse24($reponse24);
        $newResultats->setReponse25($reponse25);
        $newResultats->setReponse26($reponse26);
        $newResultats->setReponse27($reponse27);
        $newResultats->setReponse28($reponse28);
        $newResultats->setReponse29($reponse29);
        $newResultats->setReponse30($reponse30);
        $newResultats->setReponse31($reponse31);
        $newResultats->setReponse32($reponse32);
        $newResultats->setReponse33($reponse33);
        $newResultats->setReponse34($reponse34);
        $newResultats->setReponse35($reponse35);
        $newResultats->setReponse36($reponse36);
        $newResultats->setReponse37($reponse37);
        $newResultats->setReponse38($reponse38);
        $newResultats->setReponse39($reponse39);
        $newResultats->setReponse40($reponse40);

        $this->manager->persist($newResultats);
        $this->manager->flush();
    }

    /**
     * @param Resultats $resultats
     * @return Resultats permet de mettre à jours les résultats
     */
    public function updateResultats(Resultats $resultats): Resultats
    {
        $this->manager->persist($resultats);
        $this->manager->flush();

        return $resultats;
    }

    /**
     * @param Resultats $resultats retire les resultats
     */
    public function removeResultats(Resultats $resultats)
    {
        $this->manager->remove($resultats);
        $this->manager->flush();
    }
}
