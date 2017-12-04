package com.gift.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gift.model.RegistryItem;

/**
 * The Interface ItemRepository.
 */
@Transactional
@Repository("registryItemRepository")
public interface RegistryItemRepository extends JpaRepository<RegistryItem, Long> {

	/**
	 * All methods like findAll, getByID, deleteById etc. will be present in Jpa
	 * which enables our project to be connected to Any Database possible
	 * 
	 * @return
	 */
	@Transactional
	void deleteByItemItemIdAndRegistryRegistryId(Long itemId, Long registryId);
}
