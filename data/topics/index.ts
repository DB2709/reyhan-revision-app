import type { TopicContent } from "./types";

import { organicChemistry } from "./organic-chemistry";
import { chemistryCalculations } from "./chemistry-calculations-topic";
import { acidSaltsSolubility } from "./acid-salts-solubility";
import { group1And7 } from "./group-1-and-7";
import { structureAndBonding } from "./structure-and-bonding";
import { chemicalAnalysis } from "./chemical-analysis";
import { waves } from "./waves";
export const topicsData: Record<string, TopicContent> = {
  "organic-chemistry": organicChemistry,
  "chemistry-calculations": chemistryCalculations,
  "acid-salts-solubility": acidSaltsSolubility,
  "group-1-and-7": group1And7,
  "structure-and-bonding": structureAndBonding,
  "chemical-analysis": chemicalAnalysis,
  "waves": waves,
};