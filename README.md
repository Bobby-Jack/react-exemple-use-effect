# React Exemple UseEffect


## REMARQUES IMPORTANTES : 
- useEffect est un Hook, vous pouvez donc uniquement l’appeler à la racine de votre composant ou de vos propres Hooks. Vous ne pouvez pas l’appeler à l’intérieur de boucles ou de conditions. Si nécessaire, extrayez un nouveau composant et déplacez l’Effet dans celui-ci.

- Si vous ne cherchez pas à synchroniser avec un système extérieur, c’est que vous n’avez probablement pas besoin d’un Effet.

- Quand le Mode Strict est activé, React appellera une fois de plus votre cycle mise en place + nettoyage, uniquement en développement, avant la première mise en place réelle.  C’est une mise à l’épreuve pour vérifier que votre logique de nettoyage reflète bien votre logique de mise en place, et décommissionne ou défait toute la mise en place effectuée.  Si ça entraîne des problèmes, écrivez une fonction de nettoyage.

- Même si votre Effet est déclenché par une interaction (telle qu’un clic), le navigateur est susceptible de rafraîchir l’affichage avant d’avoir traité les mises à jour d’état au sein de votre Effet.  Le comportement final est généralement celui souhaité.  Cependant, si vous devez empêcher le navigateur de rafraîchir l’affichage tout de suite, remplacez useEffect par useLayoutEffect.

- Les Effets ne sont exécutés que côté client.  Ils sont ignorés lors du rendu côté serveur.

- - info provenant de la doc officiel


